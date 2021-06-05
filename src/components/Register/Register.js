import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Register({ onMount, onRegister, responseMessage }) {
  const [formValues, setFormValues] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const nameInput = useRef();

  function validateUserName() {
    const input = nameInput.current;
    const re = /^[\wа-я\sё-]+$/;
    input.setCustomValidity(re.test(input.value) ? "" : "Недопустимое имя пользователя");
  }

  function handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    validateUserName();
    setFormValues({ ...formValues, [name]: value });
    setInputErrors({ ...inputErrors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  }

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(formValues);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onMount, []);

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
            ref={nameInput}
          />
          <span className="register__input-error">{inputErrors.name}</span>
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
          <span className="register__input-error">{inputErrors.email}</span>
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
          <span className="register__input-error">{inputErrors.password}</span>
        </label>
      </div>
      <div className="register__container">
        <span className="register__error">{responseMessage.message}</span>
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
