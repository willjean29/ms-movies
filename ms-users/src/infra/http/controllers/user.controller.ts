import { Request, Response } from "express";
import { UserRepository as IUserRepository } from "../../../domain/repositories/user.repository";
import { UserRepository } from "../../../infra/repositories/user.repository";
import { MongoUserDatasource } from "../../datasources/mongo-user.datasource";
import { CreateUserUseCase } from "../../../app/create-user.usecase";

export class UserController {
  async create(req: Request, res: Response) {
    const userRepository = new UserRepository(new MongoUserDatasource());
    try {
      const createUser = new CreateUserUseCase(userRepository);
      const user = await createUser.execute(req.body as any);
      res.status(201).json(user);
    } catch (error) {
      console.log({ error });
    }
  }
}
