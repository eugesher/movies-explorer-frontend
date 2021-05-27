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
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleLogin({ email, password }) {
    authorize({ email, password })
      .then(({ token }) => {
        if (token) {
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function handleRegister({ email, password, name }) {
    register({ email, password, name })
      .then((data) => {
        if (data.statusCode === 400) {
          setRegisterErrorMessage(data.validation.body.message);
        } else if (data.message) {
          setRegisterErrorMessage(data.message);
        } else if (data._id) {
          setRegisterErrorMessage("");
        }
      })
      .then(() => {
        handleLogin({ email, password });
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

  console.log(currentUser);

  return (
    <div className="app">
      <Header windowWidth={windowWidth} loggedIn={loggedIn} onOpenMobileMenu={openMobileMenu} />
      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Movies windowWidth={windowWidth} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} errorMessage={registerErrorMessage} />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="*">
          <ErrorPage statusCode={"404"} onGoBack={history.goBack} />
        </Route>
      </Switch>
      <Switch>
        <Route path={["/movies", "/saved-movies"]}>
          <Footer />
        </Route>
      </Switch>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </div>
  );
}

export default withRouter(App);
