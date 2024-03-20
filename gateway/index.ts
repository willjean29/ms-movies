import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 8000;
const moviesProxyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware para el proxy de películas");
  next();
};
app.use(cors());
app.use(express.json());

app.use(
  "/api/v1/movies",
  proxy("http://localhost:8002", {
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      moviesProxyMiddleware(srcReq, {} as Response, () => {});
      return proxyReqOpts;
    },
  })
);

// app.use("/api/v1/notifications", proxy("http://localhost:8003"));

app.listen(PORT, () => {
  console.log(`Gateway listening to port ${PORT}`);
});
