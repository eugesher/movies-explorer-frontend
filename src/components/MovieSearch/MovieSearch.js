import "./MovieSearch.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

export default function MovieSearch() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="movie-search">
      <div className="movie-search__content">
        <form className="movie-search__form">
          <div
            className={`movie-search__input-group ${
              isFocused && "movie-search__input-group_focused"
            }`}
          >
            <input
              type="text"
              placeholder="Фильм"
              className="movie-search__input"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
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
