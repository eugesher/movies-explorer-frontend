import "./FilterCheckbox.css";
import { useRef } from "react";

export default function FilterCheckbox({ onShortMoviesSelection }) {
  const checkBox = useRef();

  function handleCheck() {
    checkBox.current.checked ? onShortMoviesSelection(true) : onShortMoviesSelection(false);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switcher">
        <input
          type="checkbox"
          onChange={handleCheck}
          id="short"
          className="filter-checkbox__input"
          ref={checkBox}
        />
        <div className="filter-checkbox__slider" />
      </label>
      <span className="filter-checkbox__label">Короткометражки</span>
    </div>
  );
}
