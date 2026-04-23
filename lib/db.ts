import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";
import * as schema from "@/lib/schema";

dotenv.config({ override: true });

const connectionString = process.env.DATABASE_URL_RUNTIME ?? process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL_RUNTIME or DATABASE_URL is not set");
}

/**
 * Singleton pattern for the database connection.
 * Using postgres-js which supports `prepare: false` for Supabase Transaction Pooler.
 */
const globalForDb = globalThis as unknown as {
    conn: postgres.Sql | undefined;
};

// Create the connection client
export const client =
    globalForDb.conn ??
    postgres(connectionString, {
        prepare: false, // MANDATORY for Supabase Transaction Mode (port 6543)
        max: 5,        // Restrict pool size as requested
        idle_timeout: 30,
        connect_timeout: 10,
    });

// Save client instance in global for non-production environments
if (process.env.NODE_ENV !== "production") {
    globalForDb.conn = client;
}

export const db = drizzle(client, { schema });
