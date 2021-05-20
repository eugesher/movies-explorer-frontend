import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt="логотип приложения" />
        <Navigation />
      </div>
    </header>
  );
}
