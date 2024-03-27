import { Router } from "express";
import { MovieController } from "@infra/http/controllers/movies.controller";

export class MovieRoutes {
  static routes() {
    const router = Router();
    const movieController = new MovieController();
    router.get("/upcoming", movieController.upcomingMovies);
    router.post("/register", movieController.saveMovie);
    router.post("/favorites", movieController.addFavorite);
    router.get("/favorites", movieController.findAllFavorite);
    router.get("/favorites/:id", movieController.findByIdFavorite);
    return router;
  }
}
