import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";
import { AppLogger } from "@shared/logger";
import { Request, Response, NextFunction } from "express";

export const handleNotFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(`Not Found - ${req.originalUrl}`, HttpStatusCode.NOT_FOUND);
  next(error);
};

export const handleError = (error: Error, req: Request, res: Response, next: NextFunction) => {
  const logger: AppLogger = new AppLogger("Middleware");
  logger.error("Error detected", error);
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
      details: error.details || error.stack,
    });
  }
  return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    status: "error",
    message: "Internal Server Error" || error.message,
    details: error.stack,
  });
};
