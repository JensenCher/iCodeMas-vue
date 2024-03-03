import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

const sql: NeonQueryFunction<boolean, boolean> = neon(import.meta.env.VITE_NEON_DATABASE_URL);
const db = drizzle(sql);

const main = async () => {
	try {
		await migrate(db, {
			migrationsFolder: "src/db/migrations",
		});

		console.log("Migration successful");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

main();