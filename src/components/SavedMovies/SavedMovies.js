import "./SavedMovies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ movies, onMovieDelete }) {
  return (
    <main className="saved-movies">
      <MovieSearch />
      <MoviesCardList isSaved={true} movies={movies} onMovieDelete={onMovieDelete} />
    </main>
  );
}
