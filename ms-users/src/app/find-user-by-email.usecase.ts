import { UserEntity } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/repositories/user.repository";
import { IFindUserByEmailUseCase } from "@domain/use-cases/find-user-by-email.usecase";
import { inject, injectable } from "tsyringe";
@injectable()
export class FindUserByEmailUseCase implements IFindUserByEmailUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}
  async execute(email: string): Promise<UserEntity | null> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }
}
