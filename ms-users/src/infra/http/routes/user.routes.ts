import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
export class UserRoutes {
  static routes() {
    const userController = new UserController();
    router.post("/create", userController.create);
    return router;
  }
}
