import { CreateSessionDto } from "@domain/entities/dtos/create-session.dto";
import { UserEntity } from "@domain/entities/user.entity";

export interface ICreateSessionUseCase {
  execute(data: CreateSessionDto): Promise<UserEntity>;
}
