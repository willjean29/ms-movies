import { Router } from "express";
import { UserController } from "@infra/http/controllers/user.controller";

const router = Router();
export class UserRoutes {
  static routes() {
    const userController = new UserController();
    router.post("/", userController.create);
    router.get("/:id", userController.getById);
    router.get("/", userController.getAllUsers);
    return router;
  }
}
