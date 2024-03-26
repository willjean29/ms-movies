import { SaveMovieUseCase } from "@app/save-movie.usecase";
import { getUpcomingMovies } from "@infra/proxy/movies";
import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { AddFavoriteUseCase } from "../../../app/add-favorite.usecase";

export class MovieController {
  async upcomingMovies(req: Request, res: Response, next: NextFunction) {
    try {
      const movies = await getUpcomingMovies();
      res.json(movies);
    } catch (error) {
      next(error);
    }
  }

  async saveMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const saveMovie = container.resolve(SaveMovieUseCase);
      const movie = await saveMovie.execute(req.body);
      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
  async addFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const addFavroite = container.resolve(AddFavoriteUseCase);
      const movie = await addFavroite.execute(req.body, req.user.id);
      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
}
