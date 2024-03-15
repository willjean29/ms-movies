import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../app/create-user.usecase";
import { container } from "tsyringe";

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
