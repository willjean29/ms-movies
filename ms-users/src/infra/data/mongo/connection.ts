import mongoose from "mongoose";
import { configEnv } from "../../../shared/config";

export class Connection {
  private connection;
  constructor() {
    this.connectDB();
    this.connection = mongoose.connection;
    this.openConnection();
    this.errorConnetion();
  }

  async connectDB() {
    try {
      await mongoose.connect(configEnv.DB_URL as string);
    } catch (error) {
      console.log(error);
      throw new Error("Error connected database");
    }
  }

  openConnection() {
    this.connection.once("open", () => {
      console.log("MongoDB connection stablished");
    });
  }

  errorConnetion() {
    this.connection.on("error", (err) => {
      console.log(err);
      process.exit(0);
    });
  }
}

export default Connection;
