import { MovieEntity } from "@domain/entities/movie.entity";
import { IFavoriteRepository } from "@domain/repositories/favorite.repository";
import { IFindByIdFavorite } from "@domain/use-cases/find-by-id-favorite.usecase";
import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindByIdFavorite implements IFindByIdFavorite {
  constructor(
    @inject("FavoriteRepository")
    private repository: IFavoriteRepository
  ) {}
  async execute(id: string): Promise<MovieEntity> {
    const favorite = await this.repository.findById(id);
    if (!favorite) {
      throw new AppError("Movie not found", HttpStatusCode.NOT_FOUND);
    }
    return favorite;
  }
}
