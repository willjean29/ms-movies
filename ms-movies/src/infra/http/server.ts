import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { configEnv } from "@shared/config";
import { handleNotFound, handleError } from "@infra/http/middlewares/handle-error";
import { AppLogger } from "@shared/logger";
import { router } from "@infra/http/routes";
import "@infra/container";
import "@infra/data/postgres/connection";

export class Server {
  private app: Application;
  private port: number = configEnv.PORT;
  private logger: AppLogger = new AppLogger("Server");
  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.routes();
    this.app.use(handleNotFound);
    this.app.use(handleError);
  }

  routes() {
    this.app.use("/", router);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      this.logger.info(`ms-movies listening to port ${this.port}`);
    });
  }
}
