import "./Movies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies({ movies }) {
  return (
    <main className="movies">
      <MovieSearch />
      <MoviesCardList isSaved={false} movies={movies} />
      <div className="movies__more-button-container">
        <button type="button" className="movies__more-button">
          Ещё
        </button>
      </div>
    </main>
  );
}
