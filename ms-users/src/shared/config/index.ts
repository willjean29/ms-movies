import { config } from "dotenv";
import { Environment } from "../../domain/entities/enviroment.entity";

if (process.env.NODE_ENV !== "prod") {
  const configFile = `.env.${process.env.NODE_ENV}`;
  config({ path: configFile });
} else {
  config();
}

export const configEnv: Environment = {
  PORT: process.env.PORT as unknown as number,
  DB_URL: process.env.MONGODB_URI as string,
  TOKEN_APP_SECRET: process.env.APP_SECRET as string,
};
