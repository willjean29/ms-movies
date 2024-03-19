import { Router } from "express";
import { validateDto } from "@infra/http/middlewares/validate-dto";
import { AuthController } from "@infra/http/controllers/auth.controller";
import { CreateSessionDto } from "@domain/entities/dtos/create-session.dto";

const router = Router();
export class AuthRoutes {
  static routes() {
    const authController = new AuthController();
    router.post("/login", validateDto(CreateSessionDto), authController.login);
    return router;
  }
}
