import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ isSaved }) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__content">
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
        <MoviesCard isSaved={isSaved} />
      </div>
    </section>
  );
}
