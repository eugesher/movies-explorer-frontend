import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switcher">
        <input type="checkbox" id="short" className="filter-checkbox__input" />
        <div className="filter-checkbox__slider" />
      </label>
      <span className="filter-checkbox__label">Короткометражки</span>
    </div>
  );
}
