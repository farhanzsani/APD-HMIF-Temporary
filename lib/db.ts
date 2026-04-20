import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";
import * as schema from "@/lib/schema";

dotenv.config({ override: true });

const globalForDb = globalThis as unknown as {
    conn: ReturnType<typeof postgres> | undefined;
};

const connectionString = process.env.DATABASE_URL_RUNTIME ?? process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL_RUNTIME or DATABASE_URL is not set");
}

/** `prepare: false` keeps Supabase transaction pooler (PgBouncer) happy. */
const client =
    globalForDb.conn ??
    postgres(connectionString, {
        max: 10,
        prepare: false,
    });

if (process.env.NODE_ENV !== "production") {
    globalForDb.conn = client;
}

export const db = drizzle(client, { schema });
