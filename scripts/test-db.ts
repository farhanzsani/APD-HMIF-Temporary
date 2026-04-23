import postgres from "postgres";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.DATABASE_URL_RUNTIME;
console.log("Testing connection to:", url?.replace(/:[^:]+@/, ":***@"));

async function test() {
    if (!url) {
        console.error("No DATABASE_URL_RUNTIME found");
        return;
    }

    const sql = postgres(url, { prepare: false, ssl: 'require' });

    try {
        const result = await sql`SELECT 1 as connected`;
        console.log("Connection successful:", result);
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        await sql.end();
    }
}

test();
