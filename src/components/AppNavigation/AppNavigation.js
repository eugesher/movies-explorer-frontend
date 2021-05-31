import "./AppNavigation.css";
import { NavLink } from "react-router-dom";
import ProfileLink from "../ProfileLink/ProfileLink";
import menuIcon from "../../images/menu.svg";

export default function AppNavigation({ windowWidth, onOpenMobileMenu }) {
  const desktopNav = (
    <>
      <nav className="app-navigation">
        <ul className="app-navigation__content">
          <li>
            <NavLink
              to="/movies"
              className="app-navigation__link"
              activeClassName="app-navigation__link_active"
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved-movies"
              className="app-navigation__link"
              activeClassName="app-navigation__link_active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
      </nav>
      <ProfileLink />
    </>
  );

  const mobileMenuButton = (
    <button type="button" onClick={onOpenMobileMenu} className="app-navigation__menu-button">
      <img src={menuIcon} alt="меню" />
    </button>
  );

  return windowWidth >= 1280 ? desktopNav : mobileMenuButton;
}
