import { Request, Response, NextFunction } from "express";
import { isUUID } from "class-validator";
import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";
export const isValidUUID = (req: Request, res: Response, next: NextFunction) => {
  const uuid = req.params.id;
  if (!isUUID(uuid)) {
    const error = new AppError(`Invalid input syntax for type uuid : ${uuid}`, HttpStatusCode.BAD_REQUEST);
    next(error);
  }
  next();
};
