import { MovieEntity } from "@domain/entities/movie.entity";
import { IFavoriteRepository } from "@domain/repositories/favorite.repository";
import { IFindAllUserUseCase } from "@domain/use-cases/find-all-favorite.usecase";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllFavoriteUseCase implements IFindAllUserUseCase {
  constructor(
    @inject("FavoriteRepository")
    private repository: IFavoriteRepository
  ) {}
  execute(userId: string): Promise<MovieEntity[]> {
    return this.repository.findAll(userId);
  }
}
