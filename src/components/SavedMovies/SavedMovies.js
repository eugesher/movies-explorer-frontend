import "./SavedMovies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

export default function SavedMovies({
  movies,
  resetMovies,
  isMovieSaved,
  onMovieSearch,
  onShortMoviesSelection,
  onMovieDelete,
  errorMessage,
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(resetMovies, []);

  return (
    <main className="saved-movies">
      <MovieSearch onMovieSearch={onMovieSearch} onShortMoviesSelection={onShortMoviesSelection} />
      <MoviesCardList movies={movies} isMovieSaved={isMovieSaved} onMovieDelete={onMovieDelete} />
      <span className="movies__error-message">{errorMessage.message}</span>
    </main>
  );
}
