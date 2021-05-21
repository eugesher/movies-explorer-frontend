import "./Login.css";
import logo from "../../images/logo.svg";

export default function Login() {
  return (
    <form className="login">
      <div className="login__container">
        <img src={logo} alt="логотип" className="login__logo" />
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__input-container">
          <span className="login__input-label">E-mail</span>
          <input type="email" className="login__input" />
        </label>
        <label className="login__input-container">
          <span className="login__input-label">Пароль</span>
          <input type="password" className="login__input" />
        </label>
        <span className="login__error">Что-то пошло не так...</span>
      </div>
      <div className="login__container">
        <button type="submit" className="login__submit-button">
          Войти
        </button>
        <a href="#" className="login__footer-link">
          <span className="login__footer-link-span">Ещё не зарегистрированы?</span>Регистрация
        </a>
      </div>
    </form>
  );
}
