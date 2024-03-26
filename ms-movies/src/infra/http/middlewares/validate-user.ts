import { Request, Response, NextFunction } from "express";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const user = req.headers["x-user"];
  if (user) {
    req.user = { id: user as string };
  }
  next();
};
