import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import * as schema from "@/lib/schema";

dotenv.config({ override: true });

const connectionString = process.env.DATABASE_URL_RUNTIME ?? process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL_RUNTIME or DATABASE_URL is not set");
}

/**
 * Singleton pattern for the database connection.
 * Using mysql2 for shared hosting MySQL compatibility.
 */
const globalForDb = globalThis as unknown as {
    conn: mysql.Pool | undefined;
};

// Create the connection pool
export const client =
    globalForDb.conn ??
    mysql.createPool({
        uri: connectionString,
        waitForConnections: true,
        connectionLimit: 5,
        connectTimeout: 10000,
    });

// Save client instance in global for non-production environments
if (process.env.NODE_ENV !== "production") {
    globalForDb.conn = pool;
}

export const db = drizzle(client, { schema, mode: "default" });
