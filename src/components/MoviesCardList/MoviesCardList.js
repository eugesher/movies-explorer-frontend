import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ isSaved, movies }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__content">
        {movies.map((movieData) => {
          return (
            <li key={movieData.id} className="movies-card-list__card">
              <MoviesCard isSaved={isSaved} data={movieData} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
