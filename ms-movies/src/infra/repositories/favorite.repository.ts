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
  findAll(userId: string): Promise<MovieEntity[]> {
    return this.datasource.findAll(userId);
  }
  create(movieDto: MovieEntity, userId: string): Promise<MovieEntity> {
    return this.datasource.create(movieDto, userId);
  }
  findById(id: string): Promise<MovieEntity | null> {
    return this.datasource.findById(id);
  }
  remove(id: string): Promise<string> {
    return this.datasource.remove(id);
  }
}
