import { MovieEntity } from "@domain/entities/movie.entity";

export interface IMovieRepository {
  save(movieDto: MovieEntity): Promise<MovieEntity>;
}
