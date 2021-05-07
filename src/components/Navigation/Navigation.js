import "./Navigation.css";
import { Link, Route, Switch } from "react-router-dom";
import { linkContents } from "../../utils/constants";

export default function Navigation() {
  return (
    <nav className="nav">
      <Switch>
        <Route exact path="/">
          <ul className="list-group nav__content">
            <li>
              <Link to="/signup" className="nav__link">
                {linkContents.singUp}
              </Link>
            </li>
            <li>
              <Link to="/signin" className="nav__link nav__link_type_signin">
                {linkContents.singIn}
              </Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </nav>
  );
}
