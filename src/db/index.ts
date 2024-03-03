import { drizzle } from "drizzle-orm/neon-http";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql: NeonQueryFunction<boolean, boolean> = neon(import.meta.env.VITE_NEON_DATABASE_URL);

export const db = drizzle(sql, {
    schema,
});