import { AppError } from "@shared/error";
import { Request, Response, NextFunction } from "express";

export const handleNotFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(`Not Found - ${req.originalUrl}`, 404);
  next(error);
};

export const handleError = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
      stack: error.stack,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
};
