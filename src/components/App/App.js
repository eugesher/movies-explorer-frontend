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

function App({ history }) {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <AppHeader />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <AppHeader />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <AppHeader />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
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
    </div>
  );
}

export default withRouter(App);
