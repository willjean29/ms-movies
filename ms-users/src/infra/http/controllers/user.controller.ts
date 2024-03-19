import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "@app/create-user.usecase";
import { FindUserByIdUseCase } from "@app/find-user-by-id.usecase";
import { FindAllUserUseCase } from "@app/find-all-user.usecase";

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

  async getById(req: Request, res: Response) {
    try {
      const findUserById = container.resolve(FindUserByIdUseCase);
      const user = await findUserById.execute(req.params.id);
      res.status(201).json(user);
    } catch (error) {
      console.log({ error });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const findAllUser = container.resolve(FindAllUserUseCase);
      const users = await findAllUser.execute();
      res.json(users);
    } catch (error) {
      console.log({ error });
    }
  }
}
