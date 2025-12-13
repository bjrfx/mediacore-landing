#!/bin/bash
# Quick Start Guide for cPanel Deployment

echo "======================================"
echo "Node.js cPanel Deployment - Quick Start"
echo "======================================"
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Build your React application${NC}"
echo "Run this command:"
echo "  npm run build"
echo ""

echo -e "${BLUE}Step 2: Upload files to cPanel${NC}"
echo "Upload to public_html (or your deployment directory):"
echo "  ✓ server.js"
echo "  ✓ server/ folder (routes.js, static.js, storage.js)"
echo "  ✓ package.json"
echo "  ✓ dist/ folder (your built React app)"
echo ""

echo -e "${BLUE}Step 3: Install dependencies in cPanel${NC}"
echo "In cPanel Terminal, run:"
echo "  npm install"
echo ""

echo -e "${BLUE}Step 4: Create Node.js Application${NC}"
echo "In cPanel > Node.js:"
echo "  1. Click 'Create Application'"
echo "  2. Set these values:"
echo "     • Application root: /home/your-username/public_html"
echo "     • Application Startup File: server.js"
echo "     • Node.js version: Latest (18.x or higher)"
echo "     • Application URL: Your domain"
echo "  3. Click 'Create'"
echo ""

echo -e "${BLUE}Step 5: Start the Application${NC}"
echo "Click 'Restart' in cPanel > Node.js"
echo ""

echo -e "${GREEN}Your app is now live!${NC}"
echo ""
echo -e "${YELLOW}Useful Links:${NC}"
echo "  📖 Deployment Guide: CPANEL_DEPLOYMENT.md"
echo "  📋 Conversion Summary: CONVERSION_SUMMARY.md"
echo "  📝 API Examples: server/routes-example.js"
echo ""

echo -e "${YELLOW}Test Locally (Optional):${NC}"
echo "  npm run build"
echo "  NODE_ENV=production node server.js"
echo "  Then visit: http://localhost:3001"
echo ""

echo -e "${YELLOW}Port Note:${NC}"
echo "  cPanel assigns a port automatically (usually 3000-3100)"
echo "  Your domain's proxy will forward to the assigned port"
echo ""
