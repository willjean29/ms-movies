import { Router } from "express";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";

export const router = Router();

router.use("/", AuthRoutes.routes());
router.use("/", UserRoutes.routes());
