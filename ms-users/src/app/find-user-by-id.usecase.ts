import { UserEntity } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/repositories/user.repository";
import { IFindUserByIdUseCase } from "@domain/use-cases/find-user-by-id.usecase";
import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";
import { inject, injectable } from "tsyringe";
@injectable()
export class FindUserByIdUseCase implements IFindUserByIdUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}
  async execute(userId: string): Promise<UserEntity> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new AppError("User not found", HttpStatusCode.NOT_FOUND);
    }
    return user;
  }
}
