import { TokenAdapter } from "@shared/adapters/token";
import { configEnv } from "@shared/config";
import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";
import { Request } from "express";
import { container } from "tsyringe";
export class AuthService {
  authenticated(req: Request) {
    try {
      const token = req.cookies.token;
      if (!token) {
        throw new AppError("Unauthorized", HttpStatusCode.UNAUTHORIZED);
      }
      const tokenAdapter = container.resolve(TokenAdapter);
      const { id } = tokenAdapter.verify(token, configEnv.TOKEN_SECRET_KEY);
      req.user = { id };
    } catch (error) {
      throw new AppError("Unauthorized", HttpStatusCode.UNAUTHORIZED);
    }
  }
}
