import mysql from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.DATABASE_URL_RUNTIME ?? process.env.DATABASE_URL;
console.log("Testing connection to:", url?.replace(/:[^:@]+@/, ":***@"));

async function test() {
    if (!url) {
        console.error("No DATABASE_URL_RUNTIME or DATABASE_URL found");
        return;
    }

    let conn: mysql.Connection | undefined;
    try {
        conn = await mysql.createConnection(url);
        const [rows] = await conn.query("SELECT 1 AS connected");
        console.log("Connection successful:", rows);
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        if (conn) await conn.end();
    }
}

test();
