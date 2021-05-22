import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img src={logo} alt="логотип приложения" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
