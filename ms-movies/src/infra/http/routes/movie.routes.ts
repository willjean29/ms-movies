import { Router } from "express";
import { MovieController } from "@infra/http/controllers/movies.controller";
import { isValidUUID } from "@infra/http/middlewares/validate-params";

export class MovieRoutes {
  static routes() {
    const router = Router();
    const movieController = new MovieController();

    router.get("/upcoming", movieController.upcomingMovies);
    router.post("/register", movieController.saveMovie);
    router.post("/favorites", movieController.addFavorite);
    router.get("/favorites", movieController.findAllFavorite);
    router.get("/favorites/:id", isValidUUID, movieController.findByIdFavorite);
    router.delete("/favorites/:id", isValidUUID, movieController.removeFavorite);

    return router;
  }
}
