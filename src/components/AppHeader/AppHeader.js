import "./AppHeader.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import profileIcon from "../../images/profile.svg";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__content">
        <Link to="/">
          <img src={logo} alt="логотип приложения" />
        </Link>
        <nav className="app-header__nav">
          <ul className="app-header__nav-content">
            <li>
              <Link to="/movies" className="app-header__nav-link">
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="/saved-movies" className="app-header__nav-link">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/profile" className="app-header__profile-link">
          Аккаунт
          <img src={profileIcon} alt="иконка профиля" className="app-header__profile-icon" />
        </Link>
      </div>
    </header>
  );
}
