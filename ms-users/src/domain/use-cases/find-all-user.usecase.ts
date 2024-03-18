import { UsersEntity } from "@domain/entities/user.entity";

export interface IFindAllUserUseCase {
  execute(): Promise<UsersEntity>;
}
