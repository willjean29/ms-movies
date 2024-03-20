import { Router } from "express";
import proxy from "express-http-proxy";
import { AuthService } from "@infra/http/services/auth.service";

export class NotificationRoutes {
  static routes() {
    const router = Router();
    const authService = new AuthService();
    router.use(
      "/",
      proxy("http://localhost:8003", {
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
