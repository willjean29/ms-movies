import mongoose from "mongoose";
import { configEnv } from "../../../shared/config";

export class MongoDatabase {
  static async connect(): Promise<void> {
    try {
      await mongoose.connect(configEnv.DB_URL);
      console.log("Mongo database connected");
    } catch (error) {
      console.log("Mongo database connection error");
      throw error;
    }
  }
}
