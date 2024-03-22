import { ListMovieEntity, MovieEntity } from "@domain/entities/movie.entity";
import { ListMovieApi, MovieApi } from "./movie.types";

export const movieMapper = (movie: MovieApi): MovieEntity => {
  return {
    adult: movie.adult,
    backdrop_path: movie.backdrop_path,
    genre_ids: movie.genre_ids,
    id: movie.id,
    original_language: movie.original_language,
    original_title: movie.original_title,
    overview: movie.overview,
    popularity: movie.popularity,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    title: movie.title,
    video: movie.video,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
  };
};

export const listMovieMapper = (listMovie: ListMovieApi): ListMovieEntity => {
  return {
    dates: listMovie.dates,
    page: listMovie.page,
    results: listMovie.results.map((result) => movieMapper(result)),
    total_pages: listMovie.total_pages,
    total_results: listMovie.total_results,
  };
};
