import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav">
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
    </nav>
  );
}
