import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
  location,
  movies,
  isMovieSaved,
  onMovieSave,
  onMovieDelete,
}) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__content">
        {movies.map((movieData) => {
          return (
            <li key={movieData.movieId} className="movies-card-list__card">
              <MoviesCard
                location={location}
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
