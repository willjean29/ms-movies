import { CreateSessionDto } from "@domain/entities/dtos/create-session.dto";
import { UserEntity } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/repositories/user.repository";
import { ICreateSessionUseCase } from "@domain/use-cases/create-session.usecase";
import { HashAdapter } from "@shared/adapters/hash";
import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";
import { container, inject, injectable } from "tsyringe";

@injectable()
export class CreateSessionUseCase implements ICreateSessionUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}
  async execute({ email, password }: CreateSessionDto): Promise<UserEntity> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Invalid credentials", HttpStatusCode.UNAUTHORIZED);
    }
    const hashAdapter = container.resolve(HashAdapter);
    const isValidPassword = hashAdapter.compareHash(password, user.password);
    if (!isValidPassword) {
      throw new AppError("Invalid credentials", HttpStatusCode.UNAUTHORIZED);
    }
    return user;
  }
}
