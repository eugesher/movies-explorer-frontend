import "./SavedMovies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ movies }) {
  return (
    <main className="saved-movies">
      <MovieSearch />
      <MoviesCardList isSaved={true} movies={movies} />
    </main>
  );
}
