import { storage } from "./storage.js";

/**
 * Register all API routes
 * @param {import('http').Server} httpServer
 * @param {import('express').Express} app
 */
export async function registerRoutes(httpServer, app) {
  // Add your API routes here
  // Prefix all routes with /api

  // Example routes:
  // app.get("/api/users", async (req, res) => {
  //   try {
  //     const users = await storage.getUsers();
  //     res.json(users);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // });

  // app.post("/api/users", async (req, res) => {
  //   try {
  //     const user = await storage.createUser(req.body);
  //     res.status(201).json(user);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // });

  return httpServer;
}
