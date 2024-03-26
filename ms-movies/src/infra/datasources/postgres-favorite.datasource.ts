import { IFavoriteDatasource } from "@domain/datasources/favorite.datasource";
import { MovieEntity } from "@domain/entities/movie.entity";
import { PostegresMovieDatasource } from "./postgres-movie.datasource";
import { EntityManager, Repository } from "typeorm";
import { FavoriteModel } from "@infra/data/postgres/models/favorite.model";
import { AppDataSource } from "@infra/data/postgres/connection";

export class PostegreFavoriteDatasource implements IFavoriteDatasource {
  private movieDatasource = new PostegresMovieDatasource();
  private repository: Repository<FavoriteModel>;
  constructor() {
    this.repository = new Repository(FavoriteModel, new EntityManager(AppDataSource));
  }
  async create(movieDto: MovieEntity, userId: string): Promise<MovieEntity> {
    let movie = await this.movieDatasource.findById(movieDto.id);
    if (!movie) {
      movie = await this.movieDatasource.save(movieDto);
    }
    const favorite = this.repository.create({
      user_id: userId,
      movie,
    });
    await this.repository.save(favorite);
    return movie;
  }
}
