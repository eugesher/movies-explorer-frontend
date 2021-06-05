import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import AppNavigation from "../AppNavigation/AppNavigation";
import { useEffect, useState } from "react";

export default function Header({ windowWidth, loggedIn, onOpenMobileMenu }) {
  const location = useLocation();
  const [isLanding, setIsLanding] = useState(false);

  useEffect(() => {
    setIsLanding(location.pathname === "/");
  }, [location.pathname]);

  return (
    <header className={`header ${isLanding && "header_type_landing"}`}>
      <div className={`header__content ${loggedIn && "header__content_state_logged-in"}`}>
        <Link to="/">
          <img src={logo} alt="логотип приложения" />
        </Link>
        {loggedIn ? (
          <AppNavigation windowWidth={windowWidth} onOpenMobileMenu={onOpenMobileMenu} />
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
}
