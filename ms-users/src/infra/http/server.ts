import express, { Application } from "express";
import { configEnv } from "../../shared/config";
import Connection from "../data/mongo/connection";
export class Server {
  private app: Application;
  private port: number = configEnv.PORT;

  constructor() {
    this.app = express();
    this.connection();
    this.middlewares();
  }

  connection() {
    new Connection();
  }

  middlewares() {
    this.app.use(express.json());
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`ms-users listening to port ${this.port}`);
    });
  }
}
