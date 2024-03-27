import { MovieEntity } from "@domain/entities/movie.entity";

export interface IFindByIdFavorite {
  execute(id: string): Promise<MovieEntity>;
}
