import mongoose, { Mongoose } from "mongoose";
import { configEnv } from "../../../shared/config";

export class MongoConnection {
  private static instance: MongoConnection;
  private mongooseInstance: Mongoose;

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
      console.log(error);
      throw new Error("Error connecting to database");
    }
  }

  public async disconnectDB(): Promise<void> {
    await this.mongooseInstance.disconnect();
  }

  private openConnection() {
    this.mongooseInstance.connection.once("open", () => {
      console.log("MongoDB connection established");
    });
  }

  private errorConnetion() {
    this.mongooseInstance.connection.on("error", (err) => {
      console.log(err);
      process.exit(0);
    });
  }
}
