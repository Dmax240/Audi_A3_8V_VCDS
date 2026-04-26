#!/bin/bash

# ============================================================================
# AUDI A3 8V VCDS - TRANSFER AND PUSH TO GITHUB
# Run this on your other code screen
# ============================================================================

# 1. Extract backup
echo "Extracting backup..."
tar -xzf Audi_A3_8V_VCDS_backup_20260426_181910.tar.gz

# 2. Enter project
cd Audi_A3_8V_VCDS

# 3. Configure git
echo "Configuring git..."
git config user.name "Dmax240"
git config user.email "your@email.com"  # Change this

# 4. Set GitHub remote
echo "Setting GitHub remote..."
git remote set-url origin https://github.com/Dmax240/Audi-A3-8V-VCDS.git

# 5. Verify setup
echo ""
echo "=== Git Configuration ==="
git remote -v
git config user.name
git config user.email
echo ""

# 6. Install dependencies
echo "Installing dependencies (this may take a few minutes)..."
pnpm install

# 7. Verify project
echo ""
echo "=== Project Verification ==="
echo "Source files:"
find . -type f \( -name "*.ts" -o -name "*.tsx" \) ! -path "*/node_modules/*" | wc -l
echo "VCDS data files:"
find artifacts/vcds-reference/src/data -name "*.ts" 2>/dev/null | wc -l

# 8. Push to GitHub
echo ""
echo "=== Pushing to GitHub ==="
git push -u origin main

echo ""
echo "✓ Complete! Repository pushed to https://github.com/Dmax240/Audi-A3-8V-VCDS.git"
