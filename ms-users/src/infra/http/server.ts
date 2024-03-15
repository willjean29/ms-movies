import express, { Application } from "express";
import { configEnv } from "@shared/config";
import { MongoConnection } from "@infra/data/mongo/connection";
import { UserRoutes } from "@infra/http/routes/user.routes";
import "@infra/container";
export class Server {
  private app: Application;
  private port: number = configEnv.PORT;

  constructor() {
    this.app = express();
    this.middlewares();
    this.connectToDatabase();
    this.routes();
  }

  async connectToDatabase() {
    MongoConnection.getInstance();
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
