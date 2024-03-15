import { UserRepository as IUserRepository } from "../../domain/repositories/user.repository";
import { UserDatasource } from "../../domain/datasources/user.datasource";
import { CreateUser } from "src/domain/entities/create-user.entity";
import { inject, injectable } from "tsyringe";
@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject("UserDatasource")
    private readonly userDatasource: UserDatasource
  ) {}
  async create(data: CreateUser) {
    return this.userDatasource.create(data);
  }
}
