import { IdAdapter } from "@shared/adapters/identifier";
import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";
import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const idAdapter = container.resolve(IdAdapter);
  const id = req.params.id;
  const isValidId = idAdapter.validate(id);
  if (!isValidId) {
    throw new AppError("Invalid id", HttpStatusCode.BAD_REQUEST);
  }
  next();
};
