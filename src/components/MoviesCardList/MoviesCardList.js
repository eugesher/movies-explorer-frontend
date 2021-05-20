import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__content">
        <MoviesCard />
        <MoviesCard />
      </div>
    </section>
  );
}
