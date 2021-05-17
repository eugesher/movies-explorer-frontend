import "./MovieSearch.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function MovieSearch() {
  return (
    <section className="movie-search">
      <div className="movie-search__content">
        <form className="movie-search__form">
          <div className="movie-search__input-group">
            <input type="text" placeholder="Фильм" className="movie-search__input" />
            <button type="submit" className="movie-search__submit-button">
              Поиск
            </button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}
