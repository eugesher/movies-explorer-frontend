import "./MovieSearch.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

export default function MovieSearch({ onMovieSearch }) {
  const [isFocused, setIsFocused] = useState(false);
  const [formValue, setFormValue] = useState("");

  function handleInputChange(event) {
    setFormValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onMovieSearch(formValue);
  }

  return (
    <section className="movie-search">
      <div className="movie-search__content">
        <form noValidate onSubmit={handleSubmit} className="movie-search__form">
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
              onChange={handleInputChange}
              required
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
