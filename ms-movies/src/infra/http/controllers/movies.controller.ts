import { SaveMovieUseCase } from "@app/save-movie.usecase";
import { getUpcomingMovies } from "@infra/proxy/movies";
import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";

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
}
