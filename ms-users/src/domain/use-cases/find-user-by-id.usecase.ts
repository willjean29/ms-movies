import { UserEntity } from "@domain/entities/user.entity";

export interface IFindUserByIdUseCase {
  execute(userId: string): Promise<UserEntity | null>;
}
