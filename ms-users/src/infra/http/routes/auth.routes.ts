import { Router } from "express";
import { validateDto } from "@infra/http/middlewares/validate-dto";
import { AuthController } from "@infra/http/controllers/auth.controller";
import { CreateSessionDto } from "@domain/entities/dtos/create-session.dto";
import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";

const router = Router();
export class AuthRoutes {
  static routes() {
    const authController = new AuthController();
    router.post("/login", validateDto(CreateSessionDto), authController.login);
    router.post("/register", validateDto(CreateUserDto), authController.register);
    return router;
  }
}
