import { Router } from "express";
import proxy from "express-http-proxy";
import { configEnv } from "@shared/config";

export class AuthnRoutes {
  static routes() {
    const router = Router();
    router.use("/", proxy(configEnv.MS_USERS_URL));
    return router;
  }
}
