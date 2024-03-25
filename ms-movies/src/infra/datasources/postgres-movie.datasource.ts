import { IMovieDatasource } from "@domain/datasources/movie.datasource";
import { MovieEntity } from "@domain/entities/movie.entity";
import { AppDataSource } from "@infra/data/postgres/connection";
import { MovieModel } from "@infra/data/postgres/models/movie.model";
import { EntityManager, Repository } from "typeorm";

export class PostegresMovieDatasource implements IMovieDatasource {
  private repository: Repository<MovieModel>;
  constructor() {
    this.repository = new Repository(MovieModel, new EntityManager(AppDataSource));
  }
  async save(movieDto: MovieEntity): Promise<MovieEntity> {
    const movie = this.repository.create(movieDto);
    await this.repository.save(movie);
    return movie;
  }
}
