import "./ErrorPage.css";
import { Link } from "react-router-dom";

export default function ErrorPage({ onGoBack }) {
  return (
    <div className="error-page">
      <div className="error-page__container">
        <h2 className="error-page__status">404</h2>
        <p className="error-page__message">Страница не найдена</p>
      </div>
      <Link onClick={onGoBack} className="error-page__footer-link">
        Назад
      </Link>
    </div>
  );
}
