import { container, inject, injectable } from "tsyringe";
import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { UserEntity } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/repositories/user.repository";
import { ICreateUserUseCase } from "@domain/use-cases/create-user.usecase";
import { HashAdapter } from "@shared/adapters/hash/hash.adapter";
import { AppError } from "@shared/error";
@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}

  async execute(createUser: CreateUserDto): Promise<UserEntity> {
    const userExists = await this.userRepository.findByEmail(createUser.email);
    if (userExists) {
      throw new AppError("There is already one user with this email");
    }
    const hashAdapter = container.resolve(HashAdapter);
    const hashedPassword = await hashAdapter.generateHash(createUser.password);
    const user = await this.userRepository.create({
      ...createUser,
      password: hashedPassword,
    });
    return user;
  }
}
