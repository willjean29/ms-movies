import mongoose, { Mongoose } from "mongoose";
import { configEnv } from "../../../shared/config";
import { AppLogger } from "@shared/logger";

export class MongoConnection {
  private static instance: MongoConnection;
  private mongooseInstance: Mongoose;
  private logger: AppLogger = new AppLogger("Database");
  private constructor() {
    this.mongooseInstance = mongoose;
    this.connectDB();
    this.openConnection();
    this.errorConnetion();
  }

  public static getInstance(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }
    return MongoConnection.instance;
  }

  private async connectDB() {
    try {
      await this.mongooseInstance.connect(configEnv.DB_URL as string);
    } catch (error) {
      this.logger.error("Error connecting to database", error as object);
    }
  }

  public async disconnectDB(): Promise<void> {
    await this.mongooseInstance.disconnect();
  }

  private openConnection() {
    this.mongooseInstance.connection.once("open", () => {
      this.logger.info("MongoDB connection established");
    });
  }

  private errorConnetion() {
    this.mongooseInstance.connection.on("error", (err) => {
      this.logger.error("Error connecting to database", err as object);
      process.exit(0);
    });
  }
}
