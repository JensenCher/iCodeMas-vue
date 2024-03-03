import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();


export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.VITE_NEON_DATABASE_URL!,
  },
} satisfies Config;


