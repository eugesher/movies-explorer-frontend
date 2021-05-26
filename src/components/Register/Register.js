import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register({ onRegister }) {
  const [formValues, setFormValues] = useState({});

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(formValues);
  }

  return (
    <form onSubmit={handleSubmit} className="register">
      <div className="register__container">
        <img src={logo} alt="логотип" className="register__logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <label className="register__input-container">
          <span className="register__input-label">Имя</span>
          <input
            name="name"
            type="text"
            required={true}
            onChange={handleInputChange}
            className="register__input"
          />
        </label>
        <label className="register__input-container">
          <span className="register__input-label">E-mail</span>
          <input
            name="email"
            type="email"
            required={true}
            onChange={handleInputChange}
            className="register__input"
          />
        </label>
        <label className="register__input-container">
          <span className="register__input-label">Пароль</span>
          <input
            name="password"
            type="password"
            required={true}
            onChange={handleInputChange}
            className="register__input"
          />
        </label>
        <span className="register__error">Что-то пошло не так...</span>
      </div>
      <div className="register__container">
        <button type="submit" className="register__submit-button">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="register__footer-link">
          <span className="register__footer-link-span">Уже зарегистрированы?</span>Войти
        </Link>
      </div>
    </form>
  );
}
