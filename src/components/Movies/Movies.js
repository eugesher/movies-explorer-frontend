import "./Movies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";
import Preloader from "../Preloader/Preloader";

export default function Movies({
  location,
  movies,
  savedMovies,
  moviesCount,
  resetMovies,
  onResize,
  onResultsShown,
  onMovieSearch,
  onMovieSave,
  onMovieDelete,
  onMoreButtonClick,
  onShortMoviesSelection,
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
      <MovieSearch onMovieSearch={onMovieSearch} onShortMoviesSelection={onShortMoviesSelection} />
      {!!movies.length && (
        <MoviesCardList
          location={location}
          isMovieSaved={isMovieSaved}
          movies={movies.slice(0, moviesCount)}
          savedMovies={savedMovies}
          onMovieSave={onMovieSave}
          onMovieDelete={onMovieDelete}
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
