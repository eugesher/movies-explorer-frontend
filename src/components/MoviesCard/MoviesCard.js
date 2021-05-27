import "./MoviesCard.css";
import heart from "../../images/heart.svg";
import heartSolid from "../../images/heart-solid.svg";
import crossIcon from "../../images/cross.svg";
import { formatMovieDuration } from "../../utils/utils";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ data, isMovieSaved, onMovieSave, onMovieDelete }) {
  const location = useLocation();

  const isSaved = isMovieSaved(data);
  // console.log(isSaved);

  const saveButton = () => {
    function handleLikeClick() {
      onMovieSave(data);
    }

    return (
      <button onClick={handleLikeClick} type="button" className="movies-card__action-button">
        <img
          src={isSaved ? heartSolid : heart}
          alt={isSaved ? "удалить фильм" : "сохранить фильм"}
          className="movies-card__action-button-image"
        />
      </button>
    );
  };

  const deleteButton = () => {
    function handleDeleteClick() {
      onMovieDelete(data);
    }

    return (
      <button onClick={handleDeleteClick} type="button" className="movies-card__action-button">
        <img src={crossIcon} alt={"удалить фильм"} className="movies-card__action-button-image" />
      </button>
    );
  };

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
