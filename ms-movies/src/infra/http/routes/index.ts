import { Router } from "express";
import { MovieRoutes } from "./movie.routes";

export const router = Router();

router.use("/", MovieRoutes.routes());
