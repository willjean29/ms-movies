import { MovieEntity } from "@domain/entities/movie.entity";

export interface IAddFavoriteUseCase {
  execute(movieDto: MovieEntity, userId: string): Promise<MovieEntity>;
}
