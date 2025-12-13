import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Serve static files from the build directory
 * @param {import('express').Express} app
 */
export function serveStatic(app) {
  // Path to your built client files
  // Adjust this path if your build directory has a different location
  const distPath = path.resolve(__dirname, "..", "dist");

  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.warn(
      `Warning: Build directory not found at ${distPath}. Make sure to build the client first with: npm run build`
    );
    throw new Error(
      `Could not find the build directory. Expected: ${distPath}. Make sure to build the client first with: npm run build`
    );
  }

  serveFromPath(app, distPath);
}

/**
 * Configure Express to serve static files
 * @param {import('express').Express} app
 * @param {string} distPath
 */
function serveFromPath(app, distPath) {
  // Serve static files with caching
  app.use(
    express.static(distPath, {
      maxAge: "1d", // Cache static assets for 1 day
      etag: false,
    })
  );

  // Handle SPA routing - fall through to index.html for non-existent files
  app.use("*", (_req, res, next) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      next();
    }
  });
}
