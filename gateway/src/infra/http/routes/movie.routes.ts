import { Router } from "express";
import proxy from "express-http-proxy";
import { AuthService } from "@infra/http/services/auth.service";
import { configEnv } from "@shared/config";

export class MovieRoutes {
  router: Router = Router();
  static routes() {
    const router = Router();
    const authService = new AuthService();
    router.use(
      "/",
      proxy(configEnv.MS_MOVIES_URL, {
        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
          authService.authenticated(srcReq);
          proxyReqOpts.headers = proxyReqOpts.headers || {};
          if (srcReq.user) {
            proxyReqOpts.headers["X-User"] = srcReq.user.id;
          }
          return proxyReqOpts;
        },
      })
    );
    return router;
  }
}
