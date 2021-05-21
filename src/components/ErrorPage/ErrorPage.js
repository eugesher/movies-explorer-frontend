import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page__container">
        <h2 className="error-page__status">404</h2>
        <p className="error-page__message">Страница не найдена</p>
      </div>
      <a href="#" className="error-page__footer-link">
        Назад
      </a>
    </div>
  );
}
