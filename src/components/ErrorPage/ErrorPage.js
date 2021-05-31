import "./ErrorPage.css";

export default function ErrorPage({ statusCode, onGoBack }) {
  const message = statusCode === "404" ? "Страница не найдена" : "На сервере произошла ошибка";

  return (
    <div className="error-page">
      <div className="error-page__container">
        <h2 className="error-page__status">{statusCode}</h2>
        <p className="error-page__message">{message}</p>
      </div>
      <button onClick={onGoBack} className="error-page__footer-link">
        Назад
      </button>
    </div>
  );
}
