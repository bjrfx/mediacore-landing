#!/bin/bash
# Pre-Deployment Checklist for cPanel

echo "╔════════════════════════════════════════════════════════╗"
echo "║   Pre-Deployment Checklist - cPanel Node.js App       ║"
echo "║                                                        ║"
echo "║   Before uploading to cPanel, verify:                 ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to check file exists
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "${RED}✗${NC} $1 - NOT FOUND"
        return 1
    fi
}

# Function to check directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
        return 0
    else
        echo -e "${RED}✗${NC} $1/ - NOT FOUND"
        return 1
    fi
}

echo -e "${BLUE}═════ FILES CONVERTED TO JAVASCRIPT ════${NC}"
check_file "server.js"
check_file "server/routes.js"
check_file "server/static.js"
check_file "server/storage.js"
echo ""

echo -e "${BLUE}═════ DOCUMENTATION CREATED ════${NC}"
check_file "CPANEL_DEPLOYMENT.md"
check_file "CONVERSION_SUMMARY.md"
check_file "DEPLOYMENT_OVERVIEW.md"
check_file "DATABASE_SETUP.md"
check_file ".env.production.example"
echo ""

echo -e "${BLUE}═════ REACT BUILD OUTPUT ════${NC}"
check_dir "dist"
if [ -d "dist" ]; then
    check_file "dist/public/index.html"
    check_file "dist/public"
fi
echo ""

echo -e "${BLUE}═════ REQUIRED FILES ════${NC}"
check_file "package.json"
check_file "package-lock.json"
echo ""

echo -e "${BLUE}═════ OPTIONAL: LOCAL TESTING ════${NC}"
echo ""
echo "Test locally before uploading to cPanel:"
echo "  1. Build: npm run build"
echo "  2. Start: NODE_ENV=production node server.js"
echo "  3. Visit: http://localhost:3001"
echo ""

echo -e "${BLUE}═════ UPLOAD TO CPANEL ════${NC}"
echo ""
echo "Upload to: /home/username/public_html/"
echo ""
echo "Files to upload:"
echo "  ✓ server.js"
echo "  ✓ server/ folder (routes.js, static.js, storage.js)"
echo "  ✓ package.json"
echo "  ✓ dist/ folder (entire directory)"
echo "  ✓ .env.production.example (if needed)"
echo ""
echo "Do NOT upload:"
echo "  ✗ server/*.ts files (old TypeScript)"
echo "  ✗ client/ folder (only dist/ needed)"
echo "  ✗ node_modules/ (install with npm install)"
echo "  ✗ .env files with real secrets"
echo ""

echo -e "${BLUE}═════ CPANEL CONFIGURATION ════${NC}"
echo ""
echo "After uploading, in cPanel Terminal:"
echo "  $ npm install"
echo ""
echo "Then in cPanel > Node.js > Create Application:"
echo "  • Application root: /home/your-username/public_html"
echo "  • Startup File: server.js"
echo "  • Node.js version: 18.x or higher"
echo "  • Application URL: yourdomain.com"
echo ""

echo -e "${BLUE}═════ VERIFY ON CPANEL ════${NC}"
echo ""
echo "After creating the app:"
echo "  1. Visit yourdomain.com - should see your React app"
echo "  2. Visit yourdomain.com/api - should see API info"
echo "  3. Check cPanel Node.js logs for any errors"
echo ""

echo -e "${YELLOW}═════ IMPORTANT NOTES ════${NC}"
echo ""
echo "• PORT is automatically set by cPanel (don't change)"
echo "• NODE_ENV should be 'production' on cPanel"
echo "• Set environment variables in cPanel Node.js Manager"
echo "• Add your API routes to server/routes.js"
echo "• Static files are served from dist/public/"
echo ""

echo -e "${GREEN}═════ DOCUMENTATION TO READ ════${NC}"
echo ""
echo "Before deploying, read these in order:"
echo "  1. CONVERSION_SUMMARY.md - What was changed"
echo "  2. DEPLOYMENT_OVERVIEW.md - How it works"
echo "  3. CPANEL_DEPLOYMENT.md - Full deployment guide"
echo "  4. DATABASE_SETUP.md - If using a database"
echo ""

echo -e "${YELLOW}═════ NEXT STEPS ════${NC}"
echo ""
echo "1. Read CONVERSION_SUMMARY.md"
echo "2. Review server/routes-example.js for API patterns"
echo "3. Add your API routes to server/routes.js"
echo "4. Build locally: npm run build"
echo "5. Test locally: NODE_ENV=production node server.js"
echo "6. Upload to cPanel"
echo "7. Install dependencies: npm install"
echo "8. Create Node.js app in cPanel with server.js as startup"
echo ""

echo -e "${GREEN}Ready to deploy! 🚀${NC}"
echo ""
