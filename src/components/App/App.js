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

function App({ history }) {
  function handleGoBack() {
    history.goBack();
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <ErrorPage onGoBack={handleGoBack} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
