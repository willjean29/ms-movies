import { User } from "@domain/entities/user.entity";
import { UserRepository } from "@domain/repositories/user.repository";
import { FindUserByEmail as IFindUserByEmail } from "@domain/use-cases/find-user-by-email.usecase";
import { inject, injectable } from "tsyringe";
@injectable()
export class FindUserByEmail implements IFindUserByEmail {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: UserRepository
  ) {}
  async execute(email: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }
}
