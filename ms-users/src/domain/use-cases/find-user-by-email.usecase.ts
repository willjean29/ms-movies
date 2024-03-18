import { UserEntity } from "@domain/entities/user.entity";

export interface IFindUserByEmailUseCase {
  execute(email: string): Promise<UserEntity | null>;
}
