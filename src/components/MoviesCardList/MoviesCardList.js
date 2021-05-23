import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ isSaved }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__content">
        <li className="movies-card-list__card">
          <MoviesCard isSaved={isSaved} />
        </li>
        <li className="movies-card-list__card">
          <MoviesCard isSaved={isSaved} />
        </li>
        <li className="movies-card-list__card">
          <MoviesCard isSaved={isSaved} />
        </li>
      </ul>
    </section>
  );
}
