import { UserRepository as IUserRepository } from "@domain/repositories/user.repository";
import { UserDatasource } from "@domain/datasources/user.datasource";
import { CreateUser } from "@domain/entities/create-user.entity";
import { inject, injectable } from "tsyringe";
import { User, Users } from "@domain/entities/user.entity";
@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject("UserDatasource")
    private readonly userDatasource: UserDatasource
  ) {}

  async create(data: CreateUser) {
    return this.userDatasource.create(data);
  }

  async findById(userId: string): Promise<User | null> {
    return this.userDatasource.findById(userId);
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.userDatasource.findByEmail(email);
  }
  async findAll(): Promise<Users> {
    return this.userDatasource.findAll();
  }
}
