import { Router } from "express";
import { UserController } from "@infra/http/controllers/user.controller";
import { validateId } from "@infra/http/middlewares/validate-params";
import { validateDto } from "@infra/http/middlewares/validate-dto";
import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { isAuthenticated } from "@infra/http/middlewares/is-authenticated";

const router = Router();
export class UserRoutes {
  static routes() {
    const userController = new UserController();
    router.post("/", validateDto(CreateUserDto), userController.create);
    router.get("/:id", validateId, userController.getById);
    router.get("/", isAuthenticated, userController.getAllUsers);
    return router;
  }
}
