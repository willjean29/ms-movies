import { CreateSessionUseCase } from "@app/create-session.usecase";
import { ITokenAdapter, TokenAdapter } from "@shared/adapters/token";
import { configEnv } from "@shared/config";
import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "@app/create-user.usecase";

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const createSession = container.resolve(CreateSessionUseCase);
      const user = await createSession.execute(req.body);
      const tokenAdapter = container.resolve(TokenAdapter);
      const token = tokenAdapter.sign({ id: user.id }, configEnv.TOKEN_SECRET_KEY, configEnv.EXPIRY_SECRET_KEY);
      res.cookie("token", token, { httpOnly: true });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const createUser = container.resolve(CreateUserUseCase);
      const user = await createUser.execute(req.body);
      const tokenAdapter = container.resolve(TokenAdapter);
      const token = tokenAdapter.sign({ id: user.id }, configEnv.TOKEN_SECRET_KEY, configEnv.EXPIRY_SECRET_KEY);
      res.cookie("token", token, { httpOnly: true });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
