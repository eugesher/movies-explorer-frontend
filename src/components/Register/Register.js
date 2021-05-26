import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register({ onRegister }) {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
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
          <span className="register__error">{errors.name}</span>
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
          <span className="register__error">{errors.email}</span>
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
          <span className="register__error">{errors.password}</span>
        </label>
      </div>
      <div className="register__container">
        <button type="submit" disabled={!isValid} className="register__submit-button">
          Зарегистрироваться
        </button>
        <Link to="/signin" className="register__footer-link">
          <span className="register__footer-link-span">Уже зарегистрированы?</span>Войти
        </Link>
      </div>
    </form>
  );
}
