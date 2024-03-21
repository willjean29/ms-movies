import { ListMovieEntity } from "@domain/entities/movie.entity";
import { axiosAdapterFactory } from "@infra/container";
import { configEnv } from "@shared/config";
import { ListMovieApi } from "./movie.types";
import { listMovieMapper } from "./movie.mapper";

const httpAdapter = axiosAdapterFactory(configEnv.MOVIE_DB_URL, configEnv.MOVIE_DB_TOKEN);

export const getUpcomingMovies = async (): Promise<ListMovieEntity> => {
  const movies = await httpAdapter.get<ListMovieApi>("/movie/upcoming?language=es");
  return listMovieMapper(movies);
};
