import { config } from "dotenv";
export interface Environment {
  PORT: number;
  TOKEN_SECRET_KEY: string;
  EXPIRY_SECRET_KEY: string;
  MS_USERS_URL: string;
  MS_MOVIES_URL: string;
  MS_NOTIFICATIONS_URL: string;
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
  MS_USERS_URL: process.env.MS_USERS_URL as string,
  MS_MOVIES_URL: process.env.MS_MOVIES_URL as string,
  MS_NOTIFICATIONS_URL: process.env.MS_NOTIFICATIONS_URL as string,
};
