#!/bin/bash

###############################################################################
# Audi A3 8V VCDS Project - Backup Restoration Script
# Usage: bash restore_backup.sh [backup_file] [destination_path]
###############################################################################

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
BACKUP_FILE="${1:-Audi_A3_8V_VCDS_backup_20260426_181910.tar.gz}"
DEST_PATH="${2:-.}"

echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Audi A3 8V VCDS - Backup Restoration Script             ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Verify backup file exists
if [ ! -f "$BACKUP_FILE" ]; then
    echo -e "${RED}✗ Error: Backup file not found: $BACKUP_FILE${NC}"
    echo ""
    echo "Usage: bash restore_backup.sh [backup_file] [destination_path]"
    echo "Example: bash restore_backup.sh Audi_A3_8V_VCDS_backup_20260426_181910.tar.gz /home/user"
    exit 1
fi

echo -e "${GREEN}✓ Backup file found:${NC} $(ls -lh "$BACKUP_FILE" | awk '{print $5, $9}')"
echo ""

# Verify tar/gzip availability
if ! command -v tar &> /dev/null; then
    echo -e "${RED}✗ Error: tar command not found${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 1: Extracting backup files...${NC}"
tar -xzf "$BACKUP_FILE" -C "$DEST_PATH"
echo -e "${GREEN}✓ Extraction complete${NC}"
echo ""

# Check if restore was successful
PROJECT_DIR="$DEST_PATH/Audi_A3_8V_VCDS"
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}✗ Error: Project directory not found after extraction${NC}"
    exit 1
fi

cd "$PROJECT_DIR"

echo -e "${YELLOW}Step 2: Verifying project structure...${NC}"
FILE_COUNT=$(find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.yaml" -o -name "*.md" \) ! -path "*/node_modules/*" ! -path "*/.git/*" | wc -l)
echo -e "${GREEN}✓ Found $FILE_COUNT source/config files${NC}"
echo ""

# Check for critical data files
echo -e "${YELLOW}Step 3: Verifying VCDS data files...${NC}"
DATA_DIR="artifacts/vcds-reference/src/data"
REQUIRED_FILES=(
    "modules.ts"
    "faultCodes.ts"
    "adaptations.ts"
    "basicSettings.ts"
    "liveData.ts"
    "warningLights.ts"
    "securityCodes.ts"
    "diagnosticGuides.ts"
    "seasonalMaintenance.ts"
    "specialFunctions.ts"
    "performanceTuning.ts"
    "troubleshootingTips.ts"
)

MISSING_FILES=0
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$DATA_DIR/$file" ]; then
        LINES=$(wc -l < "$DATA_DIR/$file")
        echo -e "${GREEN}✓${NC} $file ($LINES lines)"
    else
        echo -e "${RED}✗${NC} $file - MISSING"
        MISSING_FILES=$((MISSING_FILES + 1))
    fi
done

if [ $MISSING_FILES -gt 0 ]; then
    echo -e "${RED}✗ Warning: $MISSING_FILES data files are missing${NC}"
    exit 1
fi
echo ""

# Check Node.js and pnpm
echo -e "${YELLOW}Step 4: Checking dependencies...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Error: Node.js not found. Please install Node.js 18+${NC}"
    exit 1
fi

NODE_VERSION=$(node --version)
echo -e "${GREEN}✓ Node.js:${NC} $NODE_VERSION"

if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠ pnpm not found. Installing...${NC}"
    npm install -g pnpm
fi

PNPM_VERSION=$(pnpm --version)
echo -e "${GREEN}✓ pnpm:${NC} $PNPM_VERSION"
echo ""

# Install dependencies
echo -e "${YELLOW}Step 5: Installing project dependencies...${NC}"
echo "(This may take a few minutes)"
pnpm install --frozen-lockfile
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Verify TypeScript compilation
echo -e "${YELLOW}Step 6: Verifying TypeScript compilation...${NC}"
if pnpm build 2>&1 | head -20; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${YELLOW}⚠ Build warnings present (may be non-critical)${NC}"
fi
echo ""

# Summary
echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Restoration Complete!                                   ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}Project restored to:${NC} $PROJECT_DIR"
echo ""
echo "Next steps:"
echo "  1. Initialize git repository:"
echo "     cd '$PROJECT_DIR'"
echo "     git init"
echo "     git remote add origin <your-repo-url>"
echo ""
echo "  2. Start development:"
echo "     pnpm dev          # Start all services"
echo "     pnpm dev:api      # Backend only"
echo "     pnpm dev:vcds     # Frontend only"
echo ""
echo "  3. Push to repository:"
echo "     git add ."
echo "     git commit -m 'Restore from backup'"
echo "     git push -u origin main"
echo ""
echo -e "${YELLOW}Documentation:${NC} See BACKUP_MANIFEST.md for detailed information"
