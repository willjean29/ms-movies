import { inject, injectable } from "tsyringe";
import { CreateUser } from "@domain/entities/create-user.entity";
import { User } from "@domain/entities/user.entity";
import { UserRepository } from "@domain/repositories/user.repository";
import { CreateUserUseCase as ICreateUserUseCase } from "@domain/use-cases/create-user.usecase";
import { HashAdapter } from "@shared/adapters/hash/hash.adapter";
@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: UserRepository,
    @inject("HashAdapter")
    private hashAdapter: HashAdapter
  ) {}

  async execute(createUser: CreateUser): Promise<User> {
    const hashedPassword = await this.hashAdapter.generateHash(createUser.password);
    const user = await this.userRepository.create({
      ...createUser,
      password: hashedPassword,
    });
    return user;
  }
}
