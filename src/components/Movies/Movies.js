import "./Movies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import { movieSearchErrors } from "../../utils/utils";
import mainApi from "../../utils/MainApi";

export default function Movies({ windowWidth, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [addedMoviesCount, setAddedMoviesCount] = useState(0);
  const [isPreloaderShown, setIsPreloaderShown] = useState(false);
  const [isMoreButtonShown, setIsMoreButtonShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ isShown: false, message: "" });

  function handleMoreButtonClick() {
    setMoviesCount(moviesCount + addedMoviesCount);
  }

  function resetMovies() {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      setMovies(movies);
    } else {
      setMovies([]);
    }
    if (windowWidth >= 480) {
      setMoviesCount(6);
    } else {
      setMoviesCount(5);
    }
  }

  function showErrorMessage(message) {
    setMovies([]);
    setErrorMessage({ isShown: true, message });
  }

  function resetErrorMessage() {
    setErrorMessage({ isShown: false, message: "" });
  }

  function handleMovieSearch(queryString) {
    if (queryString.trim() === "") {
      showErrorMessage(movieSearchErrors.requiredField);
      return;
    }

    resetErrorMessage();
    setIsPreloaderShown(true);

    const matchedMovies = [];
    moviesApi
      .getMovies()
      .then((data) => {
        const re = new RegExp(queryString, "i");
        data.forEach((movieData) => {
          if (re.test(movieData.nameRU) || re.test(movieData.nameEN)) {
            const movie = {
              country: movieData.country,
              director: movieData.director,
              duration: movieData.duration,
              year: movieData.year,
              description: movieData.description,
              image: movieData.image.url,
              trailer: movieData.trailerLink,
              thumbnail: movieData.image.formats.thumbnail.url,
              movieId: movieData.id,
              nameRU: movieData.nameRU,
              nameEN: movieData.nameEN,
            };
            matchedMovies.push(movie);
          }
        });
        return matchedMovies;
      })
      .then((matchedMovies) => {
        setIsPreloaderShown(false);
        if (!!matchedMovies.length) {
          setMovies(matchedMovies);
          localStorage.setItem("movies", JSON.stringify(matchedMovies));
        } else {
          showErrorMessage(movieSearchErrors.notFound);
        }
      })
      .catch((e) => {
        setIsPreloaderShown(false);
        showErrorMessage(movieSearchErrors.responseError);
        console.error(e);
      });
  }

  function handleMovieSave(movie) {
    mainApi
      .postMovie(movie)
      .then((targetMovie) => {
        setMovies(movies.map((m) => (m._id === movie._id ? targetMovie : m)));
      })
      .catch((e) => {
        console.error(e);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(resetMovies, []);

  useEffect(() => {
    if (windowWidth >= 480) {
      setAddedMoviesCount(3);
    } else {
      setAddedMoviesCount(2);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (moviesCount >= movies.length || !moviesCount) {
      setIsMoreButtonShown(false);
    } else {
      setIsMoreButtonShown(true);
    }
  }, [movies.length, moviesCount]);

  return (
    <main className="movies">
      <MovieSearch onMovieSearch={handleMovieSearch} />
      {!!movies.length && (
        <MoviesCardList
          isSaved={false}
          movies={movies.slice(0, moviesCount)}
          onMovieSave={handleMovieSave}
        />
      )}
      {isPreloaderShown && <Preloader />}
      <span className="movies__error-message">{errorMessage.message}</span>
      <div className="movies__more-button-container">
        {isMoreButtonShown && (
          <button type="button" onClick={handleMoreButtonClick} className="movies__more-button">
            Ещё
          </button>
        )}
      </div>
    </main>
  );
}
