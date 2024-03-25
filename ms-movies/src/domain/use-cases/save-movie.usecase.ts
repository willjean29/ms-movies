import { MovieEntity } from "@domain/entities/movie.entity";

export interface ISaveMovieUseCase {
  execute(movieDto: MovieEntity): Promise<MovieEntity>;
}
