import { User } from "@domain/entities/user.entity";
import { UserRepository } from "@domain/repositories/user.repository";
import { FindUserById as IFindUserId } from "@domain/use-cases/find-user-by-id.usecase";
import { inject, injectable } from "tsyringe";
@injectable()
export class FindUserById implements IFindUserId {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: UserRepository
  ) {}
  async execute(userId: string): Promise<User | null> {
    const user = await this.userRepository.findById(userId);
    return user;
  }
}
