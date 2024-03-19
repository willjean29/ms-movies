import { Router } from "express";
import { UserController } from "@infra/http/controllers/user.controller";
import { validateId } from "@infra/http/middlewares/validate-params";

const router = Router();
export class UserRoutes {
  static routes() {
    const userController = new UserController();
    router.post("/", userController.create);
    router.get("/:id", validateId, userController.getById);
    router.get("/", userController.getAllUsers);
    return router;
  }
}
