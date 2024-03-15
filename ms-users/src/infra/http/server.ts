import express, { Application } from "express";
import { configEnv } from "../../shared/config";
import { MongoDatabase } from "../data/mongo/connection";
import { UserRoutes } from "./routes/user.routes";
export class Server {
  private app: Application;
  private port: number = configEnv.PORT;

  constructor() {
    this.app = express();
    this.middlewares();
    this.connectToDatabase();
  }

  async connectToDatabase() {
    try {
      await MongoDatabase.connect();
      this.routes();
    } catch (error) {
      console.error("Error connecting to database:", error);
      process.exit(0);
    }
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/users", UserRoutes.routes());
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`ms-users listening to port ${this.port}`);
    });
  }
}
