import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { UserEntity, UsersEntity } from "@domain/entities/user.entity";

export interface IUserDatasource {
  findAll(): Promise<UsersEntity>;
  findByEmail(email: string): Promise<UserEntity | null>;
  findById(userId: string): Promise<UserEntity | null>;
  create(data: CreateUserDto): Promise<UserEntity>;
}
