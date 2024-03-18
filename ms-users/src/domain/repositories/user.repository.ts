import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { UserEntity, UsersEntity } from "@domain/entities/user.entity";

export interface IUserRepository {
  findAll(): Promise<UsersEntity>;
  // findByName(name: string): Promise<User | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  findById(userId: string): Promise<UserEntity | null>;
  create(data: CreateUserDto): Promise<UserEntity>;
  // save(data: User): Promise<User>;
  // remove(userId: string): Promise<void>;
}
