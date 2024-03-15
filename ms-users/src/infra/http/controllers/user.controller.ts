import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "@app/create-user.usecase";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const createUser = container.resolve(CreateUserUseCase);
      const user = await createUser.execute(req.body as any);
      res.status(201).json(user);
    } catch (error) {
      console.log({ error });
    }
  }
}
