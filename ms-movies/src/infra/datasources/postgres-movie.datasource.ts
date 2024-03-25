import { IMovieDatasource } from "@domain/datasources/movie.datasource";
import { MovieEntity } from "@domain/entities/movie.entity";

export class PostegresMovieDatasource implements IMovieDatasource {
  save(movieDto: MovieEntity): Promise<MovieEntity> {
    throw new Error("Method not implemented.");
  }
}
