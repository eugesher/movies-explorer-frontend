import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ isSaved, movies, onMovieSave }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__content">
        {movies.map((movieData) => {
          return (
            <li key={movieData.movieId} className="movies-card-list__card">
              <MoviesCard isSaved={isSaved} data={movieData} onMovieSave={onMovieSave} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
