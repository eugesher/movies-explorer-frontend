import { Route, Switch } from "react-router-dom";
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

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <Header />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
