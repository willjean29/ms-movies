import { Router } from "express";
import { MovieController } from "@infra/http/controllers/movies.controller";

export class MovieRoutes {
  static routes() {
    const router = Router();
    const movieController = new MovieController();
    router.get("/upcoming", movieController.upcomingMovies);
    return router;
  }
}
