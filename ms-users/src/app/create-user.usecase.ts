import { CreateUser } from "src/domain/entities/create-user.entity";
import { User } from "src/domain/entities/user.entity";
import { UserRepository } from "src/domain/repositories/user.repository";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(createUser: CreateUser): Promise<User> {
    const user = await this.userRepository.create(createUser);
    return user;
  }
}
