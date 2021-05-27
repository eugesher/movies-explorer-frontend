import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login({ onMount, onLogin }) {
  const [formValues, setFormValues] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValues({ ...formValues, [name]: value });
    setInputErrors({ ...inputErrors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin(formValues);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onMount, []);

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="login__container">
        <img src={logo} alt="логотип" className="login__logo" />
        <h2 className="login__title">Рады видеть!</h2>
        <label className="login__input-container">
          <span className="login__input-label">E-mail</span>
          <input
            name="email"
            type="email"
            required={true}
            onChange={handleInputChange}
            className="login__input"
          />
          <span className="login__input-error">{inputErrors.email}</span>
        </label>
        <label className="login__input-container">
          <span className="login__input-label">Пароль</span>
          <input
            name="password"
            type="password"
            required={true}
            onChange={handleInputChange}
            className="login__input"
          />
          <span className="login__input-error">{inputErrors.password}</span>
        </label>
      </div>
      <div className="login__container">
        <button type="submit" disabled={!isValid} className="login__submit-button">
          Войти
        </button>
        <Link to="/signup" className="login__footer-link">
          <span className="login__footer-link-span">Ещё не зарегистрированы?</span>Регистрация
        </Link>
      </div>
    </form>
  );
}
