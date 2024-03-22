import { getUpcomingMovies } from "@infra/proxy/movies";
import { Request, Response, NextFunction } from "express";

export class MovieController {
  async upcomingMovies(req: Request, res: Response, next: NextFunction) {
    try {
      const movies = await getUpcomingMovies();
      res.json(movies);
    } catch (error) {
      next(error);
    }
  }
}
