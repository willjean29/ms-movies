import { Router } from "express";
import { MovieRoutes } from "./movie.routes";
import { NotificationRoutes } from "./notitifacion.routes";
import { UserRoutes } from "./user.routes";
import { AuthnRoutes } from "./auth.routes";

export const router = Router();
router.use("/auth", AuthnRoutes.routes());
router.use("/users", UserRoutes.routes());
router.use("/movies", MovieRoutes.routes());
router.use("/notifications", NotificationRoutes.routes());
