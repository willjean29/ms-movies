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

  async findAll(userId: string): Promise<MovieEntity[]> {
    const favorites = await this.repository.find({
      where: {
        user_id: userId,
      },
      relations: ["movie"],
    });
    return favorites as any;
  }

  async findById(id: string): Promise<MovieEntity | null> {
    const favorite = await this.repository.findOne({
      where: { id },
      relations: ["movie"],
    });
    if (!favorite) return null;
    return favorite.movie;
  }

  async remove(id: string): Promise<string> {
    await this.repository.delete(id);
    return "Favorite movie removed";
  }
}
