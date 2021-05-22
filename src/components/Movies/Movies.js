import "./Movies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <main className="movies">
      <MovieSearch />
      <MoviesCardList />
      <div className="movies__more-button-container">
        <button type="button" className="movies__more-button">
          Ещё
        </button>
      </div>
    </main>
  );
}
