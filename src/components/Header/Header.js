import "./Header.css";
import logo from "../../images/logo.svg";
import { imgAltTexts } from "../../utils/constants";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt={imgAltTexts.logo} className="header__logo" />
        <Navigation />
      </div>
    </header>
  );
}
