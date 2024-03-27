import { MovieEntity } from "@domain/entities/movie.entity";

export interface IFindAllUserUseCase {
  execute(userId: string): Promise<MovieEntity[]>;
}
