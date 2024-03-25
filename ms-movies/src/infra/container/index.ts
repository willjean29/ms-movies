import { IMovieDatasource } from "@domain/datasources/movie.datasource";
import { PostegresMovieDatasource } from "@infra/datasources/postgres-movie.datasource";
import { AxiosAdapter, HttpAdapter, IHttpAdapter } from "@shared/adapters/http";
import { container } from "tsyringe";
import { IMovieRepository } from "@domain/repositories/movie.repository";
import { MovieRepository } from "@infra/repositories/movie.repository";

container.registerSingleton<IMovieDatasource>("MovieDatasource", PostegresMovieDatasource);
container.registerSingleton<IMovieRepository>("MovieRepository", MovieRepository);

export const axiosAdapterFactory = (url: string, apiKey?: string) => {
  const axiosAdapter = new AxiosAdapter(url, apiKey);
  container.register<IHttpAdapter>("HttpAdapter", { useValue: axiosAdapter });
  return container.resolve(HttpAdapter);
};
