import "./SavedMovies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  return (
    <main className="saved-movies">
      <MovieSearch />
      <MoviesCardList isSaved={true} />
    </main>
  );
}
