import { CreateUser } from "@domain/entities/create-user.entity";
import { User } from "@domain/entities/user.entity";

export interface CreateUserUseCase {
  execute: (data: CreateUser) => Promise<User>;
}
