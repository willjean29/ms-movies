import { config } from "dotenv";
export interface Environment {
  PORT: number;
  DB_URL: string;
  TOKEN_APP_SECRET: string;
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
  TOKEN_APP_SECRET: process.env.TOKEN_APP_SECRET as string,
};
