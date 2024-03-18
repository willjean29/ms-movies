import { Users } from "@domain/entities/user.entity";

export interface FindAllUserUseCase {
  execute(): Promise<Users>;
}
