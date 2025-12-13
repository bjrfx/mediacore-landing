#!/bin/bash
# Build script for cPanel deployment
# Run this locally to build your application

echo "Building React client..."
npm run build || exit 1

echo ""
echo "✅ Build complete!"
echo ""
echo "To deploy to cPanel:"
echo "1. Upload these files to your cPanel public_html:"
echo "   - server.js"
echo "   - server/ folder"
echo "   - package.json"
echo "   - dist/ folder (your built React app)"
echo ""
echo "2. In cPanel Terminal, run:"
echo "   npm install"
echo ""
echo "3. Create Node.js application in cPanel with:"
echo "   Startup File: server.js"
echo ""
