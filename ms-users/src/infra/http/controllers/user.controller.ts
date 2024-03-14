import { Request, Response } from "express";
import { CreateUserUseCase } from "src/app/create-user.usecase";
import { UserRepository as IUserRepository } from "src/domain/repositories/user.repository";
import { MongoUserDatasource } from "src/infra/datasources/mongo-user.datasource";
import { UserRepository } from "src/infra/repositories/user.repository";

export class UserController {
  private userRepository: IUserRepository;
  private userDatasource = new MongoUserDatasource();
  constructor() {
    this.userRepository = new UserRepository(this.userDatasource);
  }
  async create(req: Request, res: Response) {
    const createUser = new CreateUserUseCase(this.userRepository);
    const user = await createUser.execute(req.body as any);
    res.status(201).json(user);
  }
}
