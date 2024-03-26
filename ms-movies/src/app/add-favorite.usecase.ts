import { MovieEntity } from "@domain/entities/movie.entity";
import { IFavoriteRepository } from "@domain/repositories/favorite.repository";
import { IAddFavoriteUseCase } from "@domain/use-cases/add-favorite.usecase";
import { inject, injectable } from "tsyringe";

@injectable()
export class AddFavoriteUseCase implements IAddFavoriteUseCase {
  constructor(
    @inject("FavoriteRepository")
    private repository: IFavoriteRepository
  ) {}
  async execute(movieDto: MovieEntity, userId: string): Promise<MovieEntity> {
    return this.repository.create(movieDto, userId);
  }
}
