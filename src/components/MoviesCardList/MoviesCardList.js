import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, isMovieSaved, onMovieSave, onMovieDelete }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__content">
        {movies.map((movieData) => {
          return (
            <li key={movieData.movieId} className="movies-card-list__card">
              <MoviesCard
                data={movieData}
                isMovieSaved={isMovieSaved}
                onMovieSave={onMovieSave}
                onMovieDelete={onMovieDelete}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
