import { MovieEntity } from "@domain/entities/movie.entity";

export interface IFavoriteDatasource {
  create(movieDto: MovieEntity, userId: string): Promise<MovieEntity>;
}
