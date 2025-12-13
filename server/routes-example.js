/**
 * API Routes Configuration
 * This file handles all API endpoints for your application
 * 
 * All routes should be prefixed with /api
 * Example: GET /api/users, POST /api/users, etc.
 */

import { storage } from "./storage.js";

/**
 * Register all API routes
 * @param {import('http').Server} httpServer - HTTP server instance
 * @param {import('express').Express} app - Express app instance
 * @returns {Promise<import('http').Server>} - Returns the httpServer
 */
export async function registerRoutes(httpServer, app) {
  // ==================== USER ROUTES ====================

  // Get all users
  app.get("/api/users", async (req, res) => {
    try {
      const users = await storage.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get user by ID
  app.get("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get user by username
  app.get("/api/users/username/:username", async (req, res) => {
    try {
      const user = await storage.getUserByUsername(req.params.username);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Create new user
  app.post("/api/users", async (req, res) => {
    try {
      const { username, email } = req.body;

      // Validation
      if (!username || !email) {
        return res
          .status(400)
          .json({ message: "username and email are required" });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      const newUser = await storage.createUser({ username, email });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Update user
  app.put("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const updatedUser = await storage.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Delete user
  app.delete("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await storage.deleteUser(req.params.id);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // ==================== HEALTH CHECK ====================

  // Health check endpoint (useful for cPanel monitoring)
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  });

  // ==================== ROOT ENDPOINT ====================

  // Root API info endpoint
  app.get("/api", (req, res) => {
    res.json({
      message: "API Server Running",
      version: "1.0.0",
      endpoints: {
        users: {
          getAll: "GET /api/users",
          getById: "GET /api/users/:id",
          getByUsername: "GET /api/users/username/:username",
          create: "POST /api/users",
          update: "PUT /api/users/:id",
          delete: "DELETE /api/users/:id",
        },
        health: "GET /api/health",
      },
    });
  });

  // ==================== 404 FOR API ====================

  // 404 handler for API routes
  app.use("/api", (req, res) => {
    res.status(404).json({
      message: `API endpoint not found: ${req.method} ${req.path}`,
    });
  });

  return httpServer;
}
