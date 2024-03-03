import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon } from "@neondatabase/serverless";

const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);

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