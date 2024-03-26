import { MovieEntity } from "@domain/entities/movie.entity";

export interface IMovieRepository {
  save(movieDto: MovieEntity): Promise<MovieEntity>;
  findById(movieId: number): Promise<MovieEntity | null>;
  // addFavorite(movieId: number, userId: string): Promise<MovieEntity>;
}
