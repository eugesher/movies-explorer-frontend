import "./SavedMovies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({
  movies,
  isMovieSaved,
  onShortMoviesSelection,
  onMovieDelete,
}) {
  return (
    <main className="saved-movies">
      <MovieSearch onShortMoviesSelection={onShortMoviesSelection} />
      <MoviesCardList movies={movies} isMovieSaved={isMovieSaved} onMovieDelete={onMovieDelete} />
    </main>
  );
}
