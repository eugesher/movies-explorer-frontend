import { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import AppHeader from "../AppHeader/AppHeader";
import MobileMenu from "../MobileMenu/MobileMenu";
import { authorize, register } from "../../utils/auth";

function App({ history }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

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
        }
      })
      .then(() => history.push("/movies"))
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

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  return (
    <div className="app">
      <Switch>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <AppHeader windowWidth={windowWidth} onOpenMobileMenu={openMobileMenu} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Header />
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
          <Login
            onSubmit={() => {
              history.push("/movies");
            }}
          />
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
