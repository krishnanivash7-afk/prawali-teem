import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';
const { Pool } = pkg;
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set in your Vercel Environment Variables");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true, // SSL जोड़ना ज़रूरी है Neon के लिए
});

export const db = drizzle(pool, { schema });