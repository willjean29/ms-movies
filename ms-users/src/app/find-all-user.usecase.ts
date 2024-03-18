import { Users } from "@domain/entities/user.entity";
import { UserRepository } from "@domain/repositories/user.repository";
import { FindAllUserUseCase as IFindAllUserUseCase } from "@domain/use-cases/find-all-user.usecase";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllUserUseCase implements IFindAllUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: UserRepository
  ) {}
  async execute(): Promise<Users> {
    return this.userRepository.findAll();
  }
}
