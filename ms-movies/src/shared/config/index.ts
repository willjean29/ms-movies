import { config } from "dotenv";
export interface Environment {
  PORT: number;
  TOKEN_SECRET_KEY: string;
  EXPIRY_SECRET_KEY: string;
  MOVIE_DB_URL: string;
  MOVIE_DB_TOKEN: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
}

if (process.env.NODE_ENV !== "prod") {
  const configFile = `.env.${process.env.NODE_ENV}`;
  config({ path: configFile });
} else {
  config();
}

export const configEnv: Environment = {
  PORT: process.env.PORT as unknown as number,
  TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY as string,
  EXPIRY_SECRET_KEY: process.env.EXPIRY_SECRET_KEY as string,
  MOVIE_DB_URL: process.env.MOVIE_DB_URL as string,
  MOVIE_DB_TOKEN: process.env.MOVIE_DB_TOKEN as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: process.env.DB_PORT as unknown as number,
  DB_USERNAME: process.env.DB_USERNAME as string,
};
