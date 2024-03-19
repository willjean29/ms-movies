import { config } from "dotenv";
export interface Environment {
  PORT: number;
  DB_URL: string;
  TOKEN_SECRET_KEY: string;
  EXPIRY_SECRET_KEY: string;
}

if (process.env.NODE_ENV !== "prod") {
  const configFile = `.env.${process.env.NODE_ENV}`;
  config({ path: configFile });
} else {
  config();
}

export const configEnv: Environment = {
  PORT: process.env.PORT as unknown as number,
  DB_URL: process.env.DB_URL as string,
  TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY as string,
  EXPIRY_SECRET_KEY: process.env.EXPIRY_SECRET_KEY as string,
};
