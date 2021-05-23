import "./ProfileLink.css";
import { Link } from "react-router-dom";
import profileIcon from "../../images/profile.svg";

export default function ProfileLink() {
  return (
    <Link to="/profile" className="profile-link">
      Аккаунт
      <img src={profileIcon} alt="иконка профиля" className="profile-link__icon" />
    </Link>
  );
}
