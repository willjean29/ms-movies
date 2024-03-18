import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { UserEntity } from "@domain/entities/user.entity";

export interface ICreateUserUseCase {
  execute(data: CreateUserDto): Promise<UserEntity>;
}
