import { IUserRepository } from "@domain/repositories/user.repository";
import { IUserDatasource } from "@domain/datasources/user.datasource";
import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { inject, injectable } from "tsyringe";
import { UserEntity, UsersEntity } from "@domain/entities/user.entity";
@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject("UserDatasource")
    private readonly userDatasource: IUserDatasource
  ) {}

  async create(data: CreateUserDto) {
    return this.userDatasource.create(data);
  }

  async findById(userId: string): Promise<UserEntity | null> {
    return this.userDatasource.findById(userId);
  }
  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userDatasource.findByEmail(email);
  }
  async findAll(): Promise<UsersEntity> {
    return this.userDatasource.findAll();
  }
}
