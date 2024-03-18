import { inject, injectable } from "tsyringe";
import { CreateUserDto } from "@domain/entities/dtos/create-user.dto";
import { UserEntity } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/repositories/user.repository";
import { ICreateUserUseCase } from "@domain/use-cases/create-user.usecase";
import { IHashAdapter } from "@shared/adapters/hash/hash.adapter";
@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository,
    @inject("HashAdapter")
    private hashAdapter: IHashAdapter
  ) {}

  async execute(createUser: CreateUserDto): Promise<UserEntity> {
    const hashedPassword = await this.hashAdapter.generateHash(createUser.password);
    const user = await this.userRepository.create({
      ...createUser,
      password: hashedPassword,
    });
    return user;
  }
}
