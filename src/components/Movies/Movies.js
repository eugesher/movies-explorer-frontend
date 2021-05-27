import "./Movies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";

export default function Movies({
  movies,
  moviesCount,
  resetMovies,
  onResize,
  onResultsShown,
  onMovieSearch,
  onMovieSave,
  onMoreButtonClick,
  isPreloaderShown,
  isMoreButtonShown,
  isMovieSaved,
  errorMessage,
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(resetMovies, []);

  useEffect(onResize, [onResize]);

  useEffect(onResultsShown, [onResultsShown]);

  return (
    <main className="movies">
      <MovieSearch onMovieSearch={onMovieSearch} />
      {!!movies.length && (
        <MoviesCardList
          isMovieSaved={isMovieSaved}
          movies={movies.slice(0, moviesCount)}
          onMovieSave={onMovieSave}
        />
      )}
      {isPreloaderShown && <Preloader />}
      <span className="movies__error-message">{errorMessage.message}</span>
      <div className="movies__more-button-container">
        {isMoreButtonShown && (
          <button type="button" onClick={onMoreButtonClick} className="movies__more-button">
            Ещё
          </button>
        )}
      </div>
    </main>
  );
}
