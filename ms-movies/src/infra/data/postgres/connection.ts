import { AppLogger } from "@shared/logger";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "tasks",
  entities: ["./src/infra/**/postgres/models/*.ts"],
  migrations: ["./src/infra/**/postgres/migrations/*.ts"],
});

const logger = new AppLogger("Database");

AppDataSource.initialize()
  .then(() => {
    logger.info("PostgreSql connection established");
    // AppDataSource.runMigrations();
  })
  .catch((err) => {
    logger.error("Error connecting to database", err);
    process.exit(0);
  });
