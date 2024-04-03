import { IFavoriteRepository } from "@domain/repositories/favorite.repository";
import { IRemoveFavoriteUseCase } from "@domain/use-cases/remove-favorite.usecase";
import { AppError } from "@shared/error";
import { HttpStatusCode } from "@shared/error/http-status-code";

import { inject, injectable } from "tsyringe";

@injectable()
export class RemoveFavoriteUseCase implements IRemoveFavoriteUseCase {
  constructor(
    @inject("FavoriteRepository")
    private repository: IFavoriteRepository
  ) {}
  async execute(id: string): Promise<string> {
    const favorite = await this.repository.findById(id);
    if (!favorite) {
      throw new AppError("Movie not found", HttpStatusCode.NOT_FOUND);
    }
    const response = await this.repository.remove(id);
    return response;
  }
}
