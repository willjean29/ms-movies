import { IFavoriteDatasource } from "@domain/datasources/favorite.datasource";
import { MovieEntity } from "@domain/entities/movie.entity";
import { IFavoriteRepository } from "@domain/repositories/favorite.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class FavoriteRepository implements IFavoriteRepository {
  constructor(
    @inject("FavoriteDatasource")
    private datasource: IFavoriteDatasource
  ) {}
  create(movieDto: MovieEntity, userId: string): Promise<MovieEntity> {
    return this.datasource.create(movieDto, userId);
  }
}
