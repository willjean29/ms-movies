import { UserEntity } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/repositories/user.repository";
import { IFindUserByIdUseCase } from "@domain/use-cases/find-user-by-id.usecase";
import { inject, injectable } from "tsyringe";
@injectable()
export class FindUserByIdUseCase implements IFindUserByIdUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}
  async execute(userId: string): Promise<UserEntity | null> {
    const user = await this.userRepository.findById(userId);
    return user;
  }
}
