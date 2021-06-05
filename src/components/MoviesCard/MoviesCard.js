import "./MoviesCard.css";
import heart from "../../images/heart.svg";
import heartSolid from "../../images/heart-solid.svg";
import crossIcon from "../../images/cross.svg";
import { formatMovieDuration } from "../../utils/utils";
import { useEffect, useState } from "react";

export default function MoviesCard({ location, data, onMovieSave, onMovieDelete }) {
  const [isSaved, setIsSaved] = useState();

  const saveButton = () => {
    function handleClick() {
      isSaved ? onMovieDelete({ ...data, _id: data.savedId }) : onMovieSave(data);
    }

    return (
      <button onClick={handleClick} type="button" className="movies-card__action-button">
        <img
          src={isSaved ? heartSolid : heart}
          alt={isSaved ? "удалить фильм" : "сохранить фильм"}
          className="movies-card__action-button-image"
        />
      </button>
    );
  };

  const deleteButton = () => {
    function handleClick() {
      onMovieDelete(data);
    }

    return (
      <button onClick={handleClick} type="button" className="movies-card__action-button">
        <img src={crossIcon} alt={"удалить фильм"} className="movies-card__action-button-image" />
      </button>
    );
  };

  function handleCardClick(event) {
    const target = event.target;
    target.classList.contains("movies-card") && window.open(data.trailer, "_blank", "noreferrer");
  }

  useEffect(() => {
    setIsSaved(!!data.savedId);
  }, [data]);

  return (
    <div onClick={handleCardClick} className="movies-card">
      <div className="movies-card__main-container">
        <div className="movies-card__info-container">
          <h2 className="movies-card__title">{data.nameRU}</h2>
          <p className="movies-card__duration">{formatMovieDuration(data.duration)}</p>
        </div>
        {location.pathname === "/movies" ? saveButton() : deleteButton()}
      </div>
      <img
        src={!!data.image ? `https://api.nomoreparties.co${data.image}` : ""}
        alt="превью постера фильма"
        className="movies-card__preview"
      />
    </div>
  );
}
