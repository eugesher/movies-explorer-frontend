import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__content">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        {/*<MoviesCard />*/}
        {/*<MoviesCard />*/}
      </div>
      <div className="movies-card-list__more-button-container">
        <button type="button" className="movies-card-list__more-button">
          Ещё
        </button>
      </div>
    </section>
  );
}
