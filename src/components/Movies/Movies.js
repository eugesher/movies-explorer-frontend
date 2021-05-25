import "./Movies.css";
import MovieSearch from "../MovieSearch/MovieSearch";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";

export default function Movies({ windowWidth }) {
  const [movies, setMovies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [addedMoviesCount, setAddedMoviesCount] = useState(0);

  function handleMoreButtonClick() {
    setMoviesCount(moviesCount + addedMoviesCount);
  }

  function handleMovieSearch(queryString) {
    const matchedMovies = [];
    moviesApi
      .getMovies()
      .then((data) => {
        const re = new RegExp(queryString, "i");
        data.forEach((movie) => {
          if (re.test(movie.nameRU) || re.test(movie.nameEN)) {
            matchedMovies.push(movie);
          }
        });
        return matchedMovies;
      })
      .then((matchedMovies) => {
        setMovies(matchedMovies);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  useEffect(() => {
    if (windowWidth >= 480) {
      setMoviesCount(6);
    } else {
      setMoviesCount(5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (windowWidth >= 480) {
      setAddedMoviesCount(3);
    } else {
      setAddedMoviesCount(2);
    }
  }, [windowWidth]);

  // useEffect(() => {
  //   moviesApi
  //     .getMovies()
  //     .then((data) => {
  //       setMovies(data);
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // }, []);

  return (
    <main className="movies">
      <MovieSearch onMovieSearch={handleMovieSearch} />
      <MoviesCardList isSaved={false} movies={movies.slice(0, moviesCount)} />
      <div className="movies__more-button-container">
        <button type="button" onClick={handleMoreButtonClick} className="movies__more-button">
          Ещё
        </button>
      </div>
    </main>
  );
}
