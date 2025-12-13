/**
 * Database Configuration Examples
 * 
 * Choose the database option that best fits your needs
 * Uncomment and configure the one you want to use
 */

// ============ OPTION 1: IN-MEMORY STORAGE (DEFAULT) ============
// Easiest for testing, data lost on restart
import { MemStorage } from "./storage.js";
export const storage = new MemStorage();

// ============ OPTION 2: POSTGRESQL (RECOMMENDED) ============
// Uncomment to use PostgreSQL with Drizzle ORM

// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";
//
// const queryClient = postgres(process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/yourdb");
// export const db = drizzle(queryClient);
//
// // Example usage in routes.js:
// // const users = await db.select().from(usersTable);

// ============ OPTION 3: MONGODB ============
// Uncomment to use MongoDB

// import { MongoClient } from "mongodb";
//
// const mongoClient = new MongoClient(
//   process.env.MONGODB_URL || "mongodb://localhost:27017/yourdb"
// );
//
// let db;
// mongoClient.connect().then(() => {
//   db = mongoClient.db("yourdb");
//   console.log("Connected to MongoDB");
// });
//
// export { db };

// ============ OPTION 4: MYSQL/MARIADB ============
// Uncomment to use MySQL (cPanel often provides MySQL)

// import mysql from "mysql2/promise";
//
// const pool = mysql.createPool({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_NAME || "yourdb",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
//
// export { pool as db };

// ============ SETUP FOR CPANEL ============
// 
// For cPanel with MySQL:
// 1. Go to cPanel > Databases > MySQL Databases
// 2. Create a new database
// 3. Create a new MySQL user
// 4. Add user to database with all privileges
// 5. Set environment variables in cPanel Node.js Manager:
//    - DB_HOST=localhost (or your host)
//    - DB_USER=cpaneluser_dbuser
//    - DB_PASSWORD=your_password
//    - DB_NAME=cpaneluser_dbname
//
// For PostgreSQL on cPanel:
// 1. Check if cPanel has PostgreSQL support
// 2. Or use external PostgreSQL host (e.g., AWS RDS, Digital Ocean)
// 3. Set DATABASE_URL environment variable in cPanel Node.js Manager
//
// For MongoDB:
// 1. Use MongoDB Atlas (free tier available)
// 2. Create cluster and get connection string
// 3. Set MONGODB_URL environment variable in cPanel Node.js Manager

// ============ MIGRATION EXAMPLE ============
// To switch from MemStorage to PostgreSQL:
//
// 1. Install driver: npm install drizzle-orm postgres
// 2. Uncomment PostgreSQL section above
// 3. Create schema (e.g., schema.ts with table definitions)
// 4. Run: npx drizzle-kit push
// 5. Update API routes in routes.js to use db instead of storage
// 6. Deploy to cPanel with new database credentials
