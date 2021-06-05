import { useState, useEffect } from "react";
import { Route, Switch, useLocation, withRouter } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import MobileMenu from "../MobileMenu/MobileMenu";
import { authorize, checkToken, register } from "../../utils/auth";
import mainApi from "../../utils/MainApi";
import Header from "../Header/Header";
import { filterShortMovies, movieSearchErrors } from "../../utils/utils";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App({ history }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ success: false, message: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
  const [addedMoviesCount, setAddedMoviesCount] = useState(0);
  const [isPreloaderShown, setIsPreloaderShown] = useState(false);
  const [isMoreButtonShown, setIsMoreButtonShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ isShown: false, message: "" });
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
  const location = useLocation();

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function resetResponseMessage() {
    setResponseMessage({ success: false, message: "" });
  }

  function handleLogin({ email, password }) {
    authorize({ email, password })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          history.push("/movies");
        } else if (data.message) {
          setResponseMessage({ success: false, message: data.message });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("savedMovies");
    setLoggedIn(false);
  }

  function handleRegister({ email, password, name }) {
    register({ email, password, name })
      .then((data) => {
        if (data.statusCode === 400) {
          setResponseMessage({ success: false, message: data.validation.body.message });
        } else if (data.message) {
          setResponseMessage({ success: false, message: data.message });
        } else if (data._id) {
          resetResponseMessage();
        }
      })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleUpdateUser(values) {
    mainApi
      .patchUserInfo(values)
      .then((data) => {
        if (data.statusCode === 400) {
          setResponseMessage({ success: false, message: data.validation.body.message });
        } else if (data.message) {
          setResponseMessage({ success: false, message: data.message });
        } else {
          setResponseMessage({ success: true, message: "Данные обновлены" });
          setCurrentUser(data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleCheckToken() {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");
      checkToken(token)
        .then((data) => {
          if (data.email) {
            setLoggedIn(true);
          }
        })
        .then(() => {
          ["/movies", "/saved-movies", "/profile"].forEach(
            (pathname) => pathname === location.pathname && history.push(pathname)
          );
        })
        .catch((e) => {
          history.push("/");
          console.error(e);
        });
    }
  }

  function resetMoviesCount() {
    setMoviesCount(windowWidth >= 480 ? 6 : 5);
  }

  function resetMovies() {
    const movies = JSON.parse(localStorage.getItem("movies"));
    movies && resetSearchErrorMessage();
    setMovies(movies ? movies : []);
    resetMoviesCount();
  }

  function resetSavedMovies() {
    const movies = JSON.parse(localStorage.getItem("savedMovies"));
    if (movies) {
      resetSearchErrorMessage();
      setSavedMovies(movies);
    } else {
      setMovies([]);
    }
  }

  function handleMoreButtonClick() {
    setMoviesCount(moviesCount + addedMoviesCount);
  }

  function showSearchErrorMessage(message) {
    setMovies([]);
    setSavedMovies([]);
    setErrorMessage({ isShown: true, message });
  }

  function resetSearchErrorMessage() {
    setErrorMessage({ isShown: false, message: "" });
  }

  function handleMoviesWindowResize() {
    if (windowWidth >= 480) {
      setAddedMoviesCount(4);
    } else {
      setAddedMoviesCount(2);
    }
  }

  function handleResultsShown() {
    if (moviesCount >= movies.length || !moviesCount) {
      setIsMoreButtonShown(false);
    } else {
      setIsMoreButtonShown(true);
    }
  }

  function getSavedMovieId(movie) {
    for (let i = 0; i < savedMovies.length; i++) {
      if (savedMovies[i].movieId === movie.id) {
        return savedMovies[i]._id;
      }
    }
    return "";
  }

  function handleShortMoviesSelection(isChecked) {
    setIsShortMoviesChecked(isChecked);
    if (isChecked) {
      setMovies(filterShortMovies(movies));
      setSavedMovies(filterShortMovies(savedMovies));
    } else {
      setMovies(JSON.parse(localStorage.getItem("movies")));
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    }
  }

  function handleMovieSearch(queryString) {
    if (queryString.trim() === "") {
      showSearchErrorMessage(movieSearchErrors.requiredField);
      return;
    }
    resetSearchErrorMessage();
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
              image: movieData.image ? movieData.image.url : "#",
              trailer: movieData.trailerLink,
              thumbnail: movieData.image ? movieData.image.formats.thumbnail.url : "#",
              movieId: movieData.id,
              nameRU: movieData.nameRU,
              nameEN: movieData.nameEN,
              savedId: getSavedMovieId(movieData),
            };
            matchedMovies.push(movie);
          }
        });
        return matchedMovies;
      })
      .then((matchedMovies) => {
        setIsPreloaderShown(false);
        resetMoviesCount();
        let moviesToSet = [];
        if (!!matchedMovies.length) {
          localStorage.setItem("movies", JSON.stringify(matchedMovies));
          moviesToSet = isShortMoviesChecked ? filterShortMovies(matchedMovies) : matchedMovies;
        }
        moviesToSet.length
          ? setMovies(moviesToSet)
          : showSearchErrorMessage(movieSearchErrors.notFound);
      })
      .catch((e) => {
        setIsPreloaderShown(false);
        showSearchErrorMessage(movieSearchErrors.responseError);
        console.error(e);
      });
  }

  function handleSavedMovieSearch(queryString) {
    const re = new RegExp(queryString, "i");
    const matchedMovies = savedMovies.filter(
      (movie) => re.test(movie.nameRU) || re.test(movie.nameEN)
    );
    let moviesToSet = [];
    if (!!matchedMovies.length) {
      moviesToSet = isShortMoviesChecked ? filterShortMovies(matchedMovies) : matchedMovies;
    }
    moviesToSet.length
      ? setSavedMovies(moviesToSet)
      : showSearchErrorMessage(movieSearchErrors.notFound);
  }

  function handleMovieDelete(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(({ _id }) => {
        if (_id) {
          const ms = movies;
          const index = ms.findIndex((m) => m.movieId === movie.movieId);
          if (index !== -1) {
            const m = { ...ms[index] };
            m.savedId = "";
            ms[index] = m;
            setMovies(ms);
            localStorage.setItem("movies", JSON.stringify(ms));
          }
          const savedMoviesToSet = savedMovies.filter((m) => m.movieId !== movie.movieId);
          localStorage.setItem("savedMovies", JSON.stringify(savedMoviesToSet));
          setSavedMovies(savedMoviesToSet);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleMovieSave(movie) {
    const m = movie;
    delete m.savedId;
    mainApi.postMovie(m).then((data) => {
      const ms = movies;
      const index = ms.findIndex((m) => m.movieId === movie.movieId);
      const m = { ...ms[index] };
      m.savedId = data._id;
      ms[index] = m;
      localStorage.setItem("movies", JSON.stringify(ms));
      setMovies(JSON.parse(localStorage.getItem("movies")));
      let sm = savedMovies;
      sm.unshift(data);
      localStorage.setItem("savedMovies", JSON.stringify(sm));
      setSavedMovies(sm);
    });
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  useEffect(() => {
    loggedIn &&
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((e) => {
          console.error(e);
        });
  }, [loggedIn]);

  useEffect(() => {
    loggedIn &&
      mainApi
        .getMovies()
        .then((data) => {
          localStorage.setItem("savedMovies", JSON.stringify(data));
          setSavedMovies(data);
        })
        .catch((e) => {
          console.error(e);
        });
  }, [loggedIn]);

  useEffect(() => {
    loggedIn && localStorage.setItem("movies", JSON.stringify([]));
  }, [loggedIn]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleCheckToken, []);

  return (
    <div className="app">
      <Switch>
        <Route path={["/", "/movies", "/saved-movies", "/profile"]} exact>
          <Header windowWidth={windowWidth} loggedIn={loggedIn} onOpenMobileMenu={openMobileMenu} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          movies={movies}
          moviesCount={moviesCount}
          resetMovies={resetMovies}
          onResize={handleMoviesWindowResize}
          onResultsShown={handleResultsShown}
          onMovieSearch={handleMovieSearch}
          onMovieSave={handleMovieSave}
          onMovieDelete={handleMovieDelete}
          onMoreButtonClick={handleMoreButtonClick}
          onShortMoviesSelection={handleShortMoviesSelection}
          isPreloaderShown={isPreloaderShown}
          isMoreButtonShown={isMoreButtonShown}
          errorMessage={errorMessage}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          movies={savedMovies}
          resetMovies={resetSavedMovies}
          onMovieSearch={handleSavedMovieSearch}
          onMovieDelete={handleMovieDelete}
          onShortMoviesSelection={handleShortMoviesSelection}
          errorMessage={errorMessage}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          user={currentUser}
          onMount={resetResponseMessage}
          onUpdateUser={handleUpdateUser}
          onLogout={handleLogout}
          responseMessage={responseMessage}
        />
        <Route path="/signup">
          <Register
            onMount={resetResponseMessage}
            onRegister={handleRegister}
            responseMessage={responseMessage}
          />
        </Route>
        <Route path="/signin">
          <Login
            onMount={resetResponseMessage}
            onLogin={handleLogin}
            responseMessage={responseMessage}
          />
        </Route>
        <Route path="*">
          <ErrorPage statusCode={"404"} onGoBack={() => history.goBack()} />
        </Route>
      </Switch>
      <Switch>
        <Route path={["/", "/movies", "/saved-movies"]} exact>
          <Footer />
        </Route>
      </Switch>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </div>
  );
}

export default withRouter(App);
