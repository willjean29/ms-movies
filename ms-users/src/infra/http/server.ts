import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { configEnv } from "@shared/config";
import { MongoConnection } from "@infra/data/mongo/connection";
import { UserRoutes } from "@infra/http/routes/user.routes";
import "@infra/container";
import { handleNotFound, handleError } from "@infra/http/middlewares/handle-error";
import { AuthRoutes } from "@infra/http/routes/auth.routes";
export class Server {
  private app: Application;
  private port: number = configEnv.PORT;

  constructor() {
    this.app = express();
    this.connectToDatabase();
    this.middlewares();
  }

  async connectToDatabase() {
    MongoConnection.getInstance();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.routes();
    this.app.use(handleNotFound);
    this.app.use(handleError);
  }

  routes() {
    this.app.use("/users", UserRoutes.routes());
    this.app.use("/auth", AuthRoutes.routes());
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`ms-users listening to port ${this.port}`);
    });
  }
}
