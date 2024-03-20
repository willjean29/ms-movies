import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { configEnv } from "@shared/config";
import "@infra/container";
import { AppLogger } from "@shared/logger";
import { handleError, handleNotFound } from "@infra/http/middlewares/handle-error";
import { router } from "@infra/http/routes";

export class Server {
  private app: Application;
  private port: number = configEnv.PORT;
  private logger: AppLogger = new AppLogger("Server");
  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.routes();
    this.app.use(handleNotFound);
    this.app.use(handleError);
  }

  routes() {
    this.app.use("/api/v1", router);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      this.logger.info(`gateway listening to port ${this.port}`);
    });
  }
}
