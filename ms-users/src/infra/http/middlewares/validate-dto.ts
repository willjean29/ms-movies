import { Request, Response, NextFunction } from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { HttpStatusCode } from "@shared/error/http-status-code";

type DtoType<T> = { new (): T };

export const validateDto = <T extends Record<string, any>>(dtoClass: DtoType<T>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dtoInstance = plainToClass(dtoClass, req.body);
      const errors: ValidationError[] = await validate(dtoInstance);
      if (errors.length > 0) {
        const details = errors.flatMap((error) => error.constraints && Object.values(error.constraints));
        return res.status(HttpStatusCode.BAD_REQUEST).json({
          status: "error",
          message: "Dto bad request",
          details,
        });
      }
      next();
    } catch (error) {
      return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ status: "error", message: "Internal Server Error", details: [] });
    }
  };
};
