# Complete Deployment Overview

## Your Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    cPanel (ifastnet)                         │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Node.js Application Manager                           │  │
│  │  • Startup File: server.js ✓                           │  │
│  │  • Port: Auto-assigned (3000-3100)                     │  │
│  │  • Node Version: 18.x or higher                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                          ▼                                     │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  server.js (Main Entry Point)                          │  │
│  │  • Initializes Express                                 │  │
│  │  • Sets up middleware                                  │  │
│  │  • Starts HTTP server                                  │  │
│  └────────────────────────────────────────────────────────┘  │
│                          ▼                                     │
│  ┌─────────────┬──────────────┬─────────────┐                │
│  │             │              │             │                │
│  ▼             ▼              ▼             ▼                │
│ API Routes  Static Files  Middleware    Storage             │
│ routes.js   static.js      logging      storage.js          │
│                                                               │
│  • REST API    • React Build  • Request   • User Data       │
│  • CRUD ops    • index.html    Logging   • In-Memory       │
│  • Business    • Assets        • Errors   • Or Database     │
│    Logic       • Cache         Handling                      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
        │                                │
        ▼                                ▼
    Domain.com                    domain.com/api/*
    (Serves React UI)            (API Endpoints)
```

## File Structure After Conversion

```
mediacore-landing/
├── server.js                        ← ⭐ YOUR STARTUP FILE
├── package.json                     ← Dependencies
├── CPANEL_DEPLOYMENT.md            ← 📖 Deployment Guide
├── CONVERSION_SUMMARY.md           ← 📋 What Changed
├── QUICKSTART.sh                   ← ⚡ Quick Setup
├── DATABASE_SETUP.md               ← 🗄️ Database Options
├── .env.production.example         ← 🔐 Environment Vars
│
├── server/
│   ├── routes.js                   ← API Routes (edit this)
│   ├── routes-example.js           ← 📝 API Examples
│   ├── static.js                   ← Static File Serving
│   ├── storage.js                  ← Data Storage
│   ├── index.ts                    ← (old - TypeScript)
│   ├── routes.ts                   ← (old - TypeScript)
│   ├── static.ts                   ← (old - TypeScript)
│   ├── storage.ts                  ← (old - TypeScript)
│   └── vite.ts                     ← (old - dev only)
│
├── client/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── components/
│   │   └── pages/
│   └── index.html
│
├── dist/
│   └── public/                     ← 📦 Build Output (after npm run build)
│       ├── index.html
│       └── assets/
│
└── ...other files
```

## Deployment Workflow (Step by Step)

### Stage 1: Local Development (Your Computer)
```
1. Write code in client/src/
2. Test with: npm run dev
3. Add API routes to server/routes.js
4. Build for production: npm run build
```

### Stage 2: Preparation (Your Computer)
```
Files to upload:
✓ server.js (root)
✓ server/*.js (4 JavaScript files)
✓ package.json
✓ dist/public/ (entire built app)
✓ Optional: node_modules/ (skip - install on cPanel)

Don't upload:
✗ server/*.ts (old TypeScript files)
✗ client/ (only dist/public/ needed)
✗ node_modules/ (will install via npm)
✗ .git/ (optional, don't needed for running)
```

### Stage 3: Upload to cPanel
```
Methods:
• FTP Client (FileZilla, Transmit, etc.)
• cPanel File Manager
• SSH/Git (if available)

Upload to: /home/username/public_html/
(or your assigned deployment directory)
```

### Stage 4: Install & Configure (cPanel Terminal)
```bash
cd /home/username/public_html
npm install
```

### Stage 5: Create Node.js App (cPanel UI)
```
cPanel > Node.js > Create Application

Settings:
┌─────────────────────────────────────┐
│ Node.js version:   18.x or latest   │
│ Application root:  /home/.../html   │
│ Application URL:   yourdomain.com   │
│ Startup File:      server.js        │
└─────────────────────────────────────┘
```

### Stage 6: Start & Test
```
• Click "Create" in cPanel
• App automatically starts
• Visit yourdomain.com - should see your React app
• Visit yourdomain.com/api - should see API info
• Check logs in cPanel Node.js Manager
```

## Request Flow Example

### When User Visits yourdomain.com:
```
Browser Request: GET https://yourdomain.com/

cPanel DNS ──→ Routes to port 3001 ──→ server.js ──→ Express App
                                              ▼
                                        serveStatic() ──→ dist/public/
                                              ▼
                                        Returns index.html
                                              ▼
                                        Browser renders React App
```

### When Browser Calls API:
```
React App Request: GET /api/users

Browser ──→ yourdomain.com/api/users ──→ Express App
                                              ▼
                                        registerRoutes() ──→ /api/users handler
                                              ▼
                                        storage.getUsers()
                                              ▼
                                        Returns JSON [{ id, username, email }, ...]
                                              ▼
                                        React displays data
```

## Key Files Explained

| File | Purpose | Edit? |
|------|---------|-------|
| **server.js** | Main startup file, loads Express | No (usually) |
| **server/routes.js** | All API endpoints | YES! Add routes here |
| **server/static.js** | Serves React build files | Rarely |
| **server/storage.js** | Database interface | Yes, if using database |
| **package.json** | Dependencies & scripts | Only if adding packages |
| **dist/public/** | Your React app build | Auto-generated by `npm run build` |

## Common Tasks

### Add a New API Endpoint
Edit `server/routes.js`:
```javascript
app.get("/api/products", async (req, res) => {
  const products = await storage.getProducts();
  res.json(products);
});
```

### Change Database
Edit `server/storage.js` or implement interface with your DB.
See `DATABASE_SETUP.md` for options.

### Add Environment Variables
In cPanel Node.js Manager, add under "Environment Variables":
```
DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=mypass
```

Then use in code:
```javascript
const host = process.env.DB_HOST;
```

### Update Dependencies
```bash
npm install new-package
npm update  # Update all
```

### View Logs
cPanel Node.js Manager → Click app → View logs

### Restart App
cPanel Node.js Manager → Click app → Restart

## Troubleshooting Quick Reference

| Problem | Solution |
|---------|----------|
| App won't start | Check server.js exists, click Restart in cPanel |
| 404 on static files (CSS/JS) | Did you run `npm run build`? Check dist/ exists |
| API returns 404 | Check routes are in server/routes.js |
| Port already in use | cPanel assigns port, shouldn't happen |
| "build directory not found" | Run `npm run build` before deploying |
| Can't connect to database | Check environment variables in cPanel |

## Security Checklist

- [ ] NODE_ENV=production in cPanel
- [ ] No .env files with secrets uploaded
- [ ] HTTPS enabled (cPanel provides SSL)
- [ ] Input validation on all API routes
- [ ] Error messages don't expose stack traces
- [ ] Dependencies updated: `npm update`
- [ ] Remove any console.log of sensitive data

## Performance Optimization

- ✅ Static files cached for 1 day
- ✅ API request logging (remove in high traffic)
- ✅ Error handling prevents crashes
- ✅ Express compression (auto via cPanel)

## Support Resources

| Need | Where |
|------|-------|
| cPanel help | cPanel documentation / ifastnet support |
| Node.js issues | node.js.org docs |
| Express help | expressjs.com docs |
| Your API design | server/routes-example.js |
| Database setup | DATABASE_SETUP.md |
| Full deployment | CPANEL_DEPLOYMENT.md |

---

## Quick Reference: After Upload to cPanel

```bash
# 1. SSH into cPanel
ssh username@domain.com

# 2. Navigate to app directory
cd public_html

# 3. Install dependencies
npm install

# 4. Go to cPanel UI and:
# - Create Node.js Application
# - Startup File: server.js
# - Click Create

# 5. Your app is live!
```

## That's It! 🎉

Your TypeScript server is now a JavaScript server ready for cPanel!
