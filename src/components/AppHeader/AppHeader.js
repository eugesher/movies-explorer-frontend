import "./AppHeader.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import menuIcon from "../../images/menu.svg";
import ProfileLink from "../ProfileLink/ProfileLink";

export default function AppHeader({ windowWidth, onOpenMobileMenu }) {
  const desktopNav = (
    <>
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
      <ProfileLink />
    </>
  );

  return (
    <header className="app-header">
      <div className="app-header__content">
        <Link to="/">
          <img src={logo} alt="логотип приложения" />
        </Link>
        {windowWidth >= 1280 ? (
          desktopNav
        ) : (
          <button type="button" onClick={onOpenMobileMenu} className="app-header__menu-button">
            <img src={menuIcon} alt="меню" />
          </button>
        )}
      </div>
    </header>
  );
}
