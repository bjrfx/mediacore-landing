import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { registerRoutes } from "./server/routes.js";
import { serveStatic } from "./server/static.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);

// Middleware to capture raw body
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

// Logging utility
function log(message, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

// Initialize server
(async () => {
  try {
    // Register API routes
    await registerRoutes(httpServer, app);

    // Error handling middleware
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      console.error(err);
    });

    // Serve static files for production
    if (process.env.NODE_ENV === "production") {
      serveStatic(app);
    } else {
      log("Running in development mode");
      // In development, you may want to setup Vite here
      // For cPanel, we'll use production mode
      serveStatic(app);
    }

    // Get port from environment variable or default to 3001
    // For cPanel, it uses the port specified in the application setup
    const port = parseInt(process.env.PORT || "3000", 10);

    httpServer.listen(
      {
        port,
        host: "localhost",
      },
      () => {
        log(`serving on http://0.0.0.0:${port}`);
      }
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
})();
