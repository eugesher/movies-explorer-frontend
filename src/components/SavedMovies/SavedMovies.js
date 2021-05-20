import "./Movies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <main className="saved-movies">
      <MovieSearch />
      <MoviesCardList />
    </main>
  );
}
