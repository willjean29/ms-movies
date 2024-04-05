import { DataSource } from "typeorm";
import { AppLogger } from "@shared/logger";
import { configEnv } from "@shared/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: configEnv.DB_HOST,
  port: configEnv.DB_PORT,
  username: configEnv.DB_USERNAME,
  password: configEnv.DB_PASSWORD,
  database: configEnv.DB_NAME,
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
