import { UsersEntity } from "@domain/entities/user.entity";
import { IUserRepository } from "@domain/repositories/user.repository";
import { IFindAllUserUseCase } from "@domain/use-cases/find-all-user.usecase";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllUserUseCase implements IFindAllUserUseCase {
  constructor(
    @inject("UserRepository")
    private readonly userRepository: IUserRepository
  ) {}
  async execute(): Promise<UsersEntity> {
    return this.userRepository.findAll();
  }
}
