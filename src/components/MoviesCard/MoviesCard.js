import "./MoviesCard.css";
import heart from "../../images/heart.svg";
import heartSolid from "../../images/heart-solid.svg";
import crossIcon from "../../images/cross.svg";
import { useState } from "react";
import { formatMovieDuration } from "../../utils/utils";

export default function MoviesCard({ isSaved, data, onMovieSave }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    onMovieSave(data);
  }

  function handleCardClick(event) {
    const target = event.target;
    if (target.classList.contains("movies-card")) {
      window.open(data.trailerLink, "_blank", "noreferrer");
    }
  }

  return (
    <div onClick={handleCardClick} className="movies-card">
      <div className="movies-card__main-container">
        <div className="movies-card__info-container">
          <h2 className="movies-card__title">{data.nameRU}</h2>
          <p className="movies-card__duration">{formatMovieDuration(data.duration)}</p>
        </div>
        <button onClick={handleLikeClick} type="button" className="movies-card__action-button">
          <img
            src={isSaved ? crossIcon : isLiked ? heartSolid : heart}
            alt={isSaved ? "удалить фильм" : "сохранить фильм"}
            className="movies-card__action-button-image"
          />
        </button>
      </div>
      <img
        src={!!data.image ? `https://api.nomoreparties.co${data.image}` : ""}
        alt="превью постера фильма"
        className="movies-card__preview"
      />
    </div>
  );
}
