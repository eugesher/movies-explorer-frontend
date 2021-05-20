import "./Navigation.css";
import { Link, Route, Switch } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
      <Switch>
        <Route exact path="/">
          <ul className="nav__content">
            <li>
              <Link to="/signup" className="nav__link">
                Регистрация
              </Link>
            </li>
            <li>
              <Link to="/signin" className="nav__link nav__link_type_signin">
                Войти
              </Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </nav>
  );
}
