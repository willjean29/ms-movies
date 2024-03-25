import { MovieEntity } from "@domain/entities/movie.entity";
import { IMovieRepository } from "@domain/repositories/movie.repository";
import { ISaveMovieUseCase } from "@domain/use-cases/save-movie.usecase";
import { inject, injectable } from "tsyringe";
@injectable()
export class SaveMovieUseCase implements ISaveMovieUseCase {
  constructor(
    @inject("MovieRepository")
    private movieRepository: IMovieRepository
  ) {}

  execute(movieDto: MovieEntity): Promise<MovieEntity> {
    return this.movieRepository.save(movieDto);
  }
}
