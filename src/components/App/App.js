import { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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

function App({ history }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ success: false, message: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
        .then(history.push("/movies"))
        .catch((e) => {
          history.push("/");
          console.error(e);
        });
    }
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
        <Route path="/movies">
          <Movies windowWidth={windowWidth} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile
            user={currentUser}
            onMount={resetResponseMessage}
            onUpdateUser={handleUpdateUser}
            onLogout={handleLogout}
            responseMessage={responseMessage}
          />
        </Route>
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
          <ErrorPage statusCode={"404"} onGoBack={() => history.push("/")} />
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
