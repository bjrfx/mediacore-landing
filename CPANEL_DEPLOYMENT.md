# cPanel Node.js Deployment Guide

This guide explains how to deploy your application to ifastnet cPanel with Node.js.

## Server Files Converted

The TypeScript server files have been converted to JavaScript for cPanel compatibility:
- `server.js` - Main entry point (application startup file)
- `server/routes.js` - API routes
- `server/static.js` - Static file serving
- `server/storage.js` - Data storage interface

## Prerequisites

1. Your cPanel should have Node.js installed (check via cPanel Node.js Manager)
2. Your application startup file is set to `server.js`
3. Your build output should be placed in the correct directory

## Build Instructions

Before deploying, you need to build your React client:

```bash
npm run build
```

This will create a `dist` or `client/dist` directory with your built static files.

## File Structure for Deployment

Your cPanel deployment should have this structure:

```
public_html/  (or your deployment directory)
├── server.js                 (Main entry point)
├── package.json
├── server/
│   ├── routes.js
│   ├── static.js
│   └── storage.js
├── dist/
│   └── public/              (Your built React app)
│       ├── index.html
│       ├── assets/
│       └── ...other files
└── node_modules/            (Auto-created after npm install)
```

## Deployment Steps

### 1. Upload Files to cPanel
1. Use File Manager or FTP to upload:
   - `server.js`
   - `server/` folder (with .js files)
   - `package.json`
   - `package-lock.json` (if available)
   - Your built application (the `dist/public` folder contents)

### 2. Install Dependencies in cPanel
In cPanel Terminal/SSH:
```bash
cd /home/username/public_html  # Adjust path to your directory
npm install
```

### 3. Create Node.js Application in cPanel
1. Open **Node.js** in cPanel
2. Click **Create Application**
3. Set these values:
   - **Node.js version**: Latest available (e.g., 18.x or 20.x)
   - **Application mode**: Select appropriate mode (Production)
   - **Application root**: `/home/username/public_html` (your directory)
   - **Application Startup File**: `server.js`
   - **Application URL**: Your domain
   - **Application port**: cPanel will auto-assign (usually 3000-3100)

### 4. Start the Application
Click "Create" and cPanel will start your application.

## Environment Variables

If you need environment variables, add them in cPanel Node.js Manager:
- `NODE_ENV=production`
- Any other variables your app needs

## Port Configuration

The app listens on the port assigned by cPanel (stored in `PORT` environment variable).
**Important**: The app binds to `0.0.0.0` to accept connections from anywhere.

## Static Files Configuration

The app automatically serves your built React files from:
- First tries: `dist/public/`
- Fallback: `client/dist/`

The build structure should be:
```
dist/public/
├── index.html
├── assets/
│   ├── index-xxxxx.js
│   ├── index-xxxxx.css
│   └── ...
└── ...
```

## API Routes

Add your API routes in `server/routes.js`:

```javascript
export async function registerRoutes(httpServer, app) {
  app.get("/api/users", async (req, res) => {
    try {
      const users = await storage.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  return httpServer;
}
```

## Data Storage

The app uses in-memory storage by default (`MemStorage`).
For persistent data, replace it with a database:

```javascript
// Example: PostgreSQL with Drizzle
// import { db } from './db.js';
// export const storage = db;
```

## Logging

The server logs API requests in the format:
```
HH:MM:SS [express] METHOD /api/endpoint STATUS_CODE in XXms :: {response}
```

Check logs in cPanel Node.js Manager or SSH:
```bash
cd /home/username/public_html
npm logs  # Or check cPanel's error logs
```

## Troubleshooting

### App won't start
- Check `Restart App` button in cPanel Node.js Manager
- Verify `server.js` exists in application root
- Check cPanel error logs for details

### Static files not loading (404 on CSS/JS)
- Make sure you ran `npm run build`
- Verify `dist/public/` directory exists with built files
- Check file paths in `server/static.js`

### API requests failing
- Verify routes are added to `server/routes.js`
- Check the app startup file is `server.js`
- Review logs in cPanel

### Port issues
- cPanel auto-assigns ports between 3000-3100
- Your domain's port will proxy to the assigned port
- Don't manually change the port in code

## Build and Deploy Workflow

```bash
# 1. Build locally
npm run build

# 2. Upload build output and server files
# Use FTP or cPanel File Manager

# 3. SSH into cPanel
ssh username@domain.com

# 4. Install dependencies
cd public_html
npm install

# 5. Start/Restart app in cPanel Node.js Manager
# Or via SSH if available
```

## Useful cPanel Commands

In cPanel Terminal/SSH:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Install dependencies
npm install

# Check if app is running
ps aux | grep node

# View error logs
tail -f ~/.npm/...  # Check cPanel logs panel
```

## Performance Tips

1. **Caching**: Static assets are cached for 1 day
2. **Compression**: Use cPanel's gzip compression
3. **Minification**: Your build process should minify automatically
4. **Database**: Use persistent storage instead of in-memory for production

## Security Notes

1. Always use `NODE_ENV=production` in cPanel
2. Validate all API inputs in routes
3. Use HTTPS (cPanel typically provides SSL)
4. Never commit `node_modules` or `.env` files
5. Keep dependencies updated: `npm update`

## Next Steps

- Test your app locally with `npm run build && NODE_ENV=production node server.js`
- Build your production build: `npm run build`
- Upload files to cPanel
- Create Node.js app in cPanel
- Monitor logs and performance

For more cPanel Node.js documentation: https://cpanel.net/
