import { inject, injectable } from "tsyringe";
import { CreateUser } from "../domain/entities/create-user.entity";
import { User } from "../domain/entities/user.entity";
import { UserRepository } from "../domain/repositories/user.repository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: UserRepository
  ) {}

  async execute(createUser: CreateUser): Promise<User> {
    const user = await this.userRepository.create(createUser);
    return user;
  }
}
