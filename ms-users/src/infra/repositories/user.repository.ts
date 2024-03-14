import { UserRepository as IUserRepository } from "../../domain/repositories/user.repository";
import { UserDatasource } from "../../domain/datasources/user.datasource";
import { CreateUser } from "src/domain/entities/create-user.entity";

export class UserRepository implements IUserRepository {
  private readonly UserDatasource: UserDatasource;
  constructor(userDatasource: UserDatasource) {
    this.UserDatasource = userDatasource;
  }
  async create(data: CreateUser) {
    return this.UserDatasource.create(data);
  }
}
