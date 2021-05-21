import "./Register.css";
import logo from "../../images/logo.svg";

export default function Register() {
  return (
    <form className="register">
      <div className="register__container">
        <img src={logo} alt="логотип" className="register__logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__input-container">
          <span className="register__input-label">Имя</span>
          <input type="text" className="register__input" />
        </label>
        <label className="register__input-container">
          <span className="register__input-label">E-mail</span>
          <input type="email" className="register__input" />
        </label>
        <label className="register__input-container">
          <span className="register__input-label">Пароль</span>
          <input type="password" className="register__input" />
        </label>
        <span className="register__error">Что-то пошло не так...</span>
      </div>
      <div className="register__container">
        <button type="submit" className="register__submit-button">
          Зарегистрироваться
        </button>
        <a href="#" className="register__footer-link">
          <span className="register__footer-link-span">Уже зарегистрированы?</span>Войти
        </a>
      </div>
    </form>
  );
}