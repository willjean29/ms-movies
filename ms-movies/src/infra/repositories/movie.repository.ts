import { IMovieDatasource } from "@domain/datasources/movie.datasource";
import { MovieEntity } from "@domain/entities/movie.entity";
import { IMovieRepository } from "@domain/repositories/movie.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class MovieRepository implements IMovieRepository {
  constructor(
    @inject("MovieDatasource")
    private datasource: IMovieDatasource
  ) {}
  save(movieDto: MovieEntity): Promise<MovieEntity> {
    return this.datasource.save(movieDto);
  }
}
