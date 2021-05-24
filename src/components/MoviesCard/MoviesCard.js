import "./MoviesCard.css";
import heart from "../../images/heart.svg";
import heartSolid from "../../images/heart-solid.svg";
import crossIcon from "../../images/cross.svg";
import preview from "../../images/preview.png";
import { useState } from "react";

export default function MoviesCard({ isSaved }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    isLiked ? setIsLiked(false) : setIsLiked(true);
  }

  return (
    <div className="movies-card">
      <div className="movies-card__main-container">
        <div className="movies-card__info-container">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 42м</p>
        </div>
        <button onClick={handleLikeClick} type="button" className="movies-card__action-button">
          <img
            src={isSaved ? crossIcon : isLiked ? heartSolid : heart}
            alt={isSaved ? "удалить фильм" : "сохранить фильм"}
            className="movies-card__action-button-image"
          />
        </button>
      </div>
      <img src={preview} alt="превью постера фильма" className="movies-card__preview" />
    </div>
  );
}
