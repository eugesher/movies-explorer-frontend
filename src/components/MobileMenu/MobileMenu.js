import "./MobileMenu.css";
import { NavLink } from "react-router-dom";
import ProfileLink from "../ProfileLink/ProfileLink";
import crossIcon from "../../images/cross.svg";
import { useEffect } from "react";

export default function MobileMenu({ isOpen, onClose }) {
  function handleOverlayClick(event) {
    event.target.classList.contains("mobile-menu") && onClose();
  }

  useEffect(() => {
    if (isOpen) {
      const handleEscapeClose = (event) => {
        event.key === "Escape" && onClose();
      };
      document.addEventListener("keydown", handleEscapeClose);
      return () => {
        document.removeEventListener("keydown", handleEscapeClose);
      };
    }
  }, [isOpen, onClose]);

  return (
    <div
      onMouseDown={handleOverlayClick}
      className={`mobile-menu ${isOpen && "mobile-menu_opened"}`}
    >
      <button type="button" onClick={onClose} className="mobile-menu__close-button">
        <img src={crossIcon} alt="закрыть" className="mobile-menu__close-icon" />
      </button>
      <div className="mobile-menu__content">
        <nav className="mobile-menu__nav">
          <NavLink
            exact
            to="/"
            className="mobile-menu__link"
            activeClassName="mobile-menu__link_active"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="mobile-menu__link"
            activeClassName="mobile-menu__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="mobile-menu__link"
            activeClassName="mobile-menu__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <ProfileLink classname="mobile-menu__profile-link" />
      </div>
    </div>
  );
}
