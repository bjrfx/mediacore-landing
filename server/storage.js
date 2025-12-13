import { randomUUID } from "crypto";

/**
 * Storage interface for user data
 * Implement this interface for your database
 */
export class MemStorage {
  constructor() {
    this.users = new Map();
  }

  /**
   * Get user by ID
   * @param {string} id
   * @returns {Promise<Object|undefined>}
   */
  async getUser(id) {
    return this.users.get(id);
  }

  /**
   * Get user by username
   * @param {string} username
   * @returns {Promise<Object|undefined>}
   */
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  /**
   * Create a new user
   * @param {Object} insertUser
   * @param {string} insertUser.username
   * @param {string} insertUser.email
   * @returns {Promise<Object>}
   */
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id, createdAt: new Date() };
    this.users.set(id, user);
    return user;
  }

  /**
   * Get all users
   * @returns {Promise<Array>}
   */
  async getUsers() {
    return Array.from(this.users.values());
  }

  /**
   * Delete user by ID
   * @param {string} id
   * @returns {Promise<boolean>}
   */
  async deleteUser(id) {
    return this.users.delete(id);
  }

  /**
   * Update user
   * @param {string} id
   * @param {Object} userData
   * @returns {Promise<Object|undefined>}
   */
  async updateUser(id, userData) {
    const user = this.users.get(id);
    if (!user) return undefined;
    const updated = { ...user, ...userData, id };
    this.users.set(id, updated);
    return updated;
  }
}

// Export singleton instance
export const storage = new MemStorage();
