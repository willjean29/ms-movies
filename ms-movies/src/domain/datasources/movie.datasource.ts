import { MovieEntity } from "@domain/entities/movie.entity";

export interface IMovieDatasource {
  save(movieDto: MovieEntity): Promise<MovieEntity>;
  findById(movieId: number): Promise<MovieEntity | null>;
}
