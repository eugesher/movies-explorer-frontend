import "./Profile.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Profile({ user, onMount, onUpdateUser, onLogout, responseMessage }) {
  const [formValues, setFormValues] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const nameInput = useRef();

  function validateUserName() {
    const input = nameInput.current;
    const re = /^[\wа-я\sё-]+$/;
    if (re.test(input.value)) {
      input.setCustomValidity("");
    } else {
      input.setCustomValidity("Недопустимое имя пользователя");
    }
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
    onUpdateUser(formValues);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(onMount, []);

  return (
    <div className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, {user.name}!</h2>
        <form id="profile-edit" onSubmit={handleSubmit} className="profile__edit-form">
          <label className="profile__input-container">
            <span className="profile__input-label">Имя</span>
            <input
              name="name"
              type="text"
              required={true}
              onChange={handleInputChange}
              className="profile__input"
              ref={nameInput}
            />
          </label>
          <span className="profile__input-error">{inputErrors.name}</span>
          <label className="profile__input-container">
            <span className="profile__input-label">E-mail</span>
            <input
              name="email"
              type="email"
              required={true}
              onChange={handleInputChange}
              className="profile__input"
            />
          </label>
          <span className="profile__input-error">{inputErrors.email}</span>
        </form>
      </div>
      <div className="profile__container">
        <span
          className={`profile__response-message ${
            responseMessage.success && "profile__response-message_type_success"
          }`}
        >
          {responseMessage.message}
        </span>
        <button
          type="submit"
          form="profile-edit"
          disabled={!isValid}
          className="profile__submit-button"
        >
          Редактировать
        </button>
        <Link to="/" onClick={onLogout} className="profile__logout-link">
          Выйти из аккаунта
        </Link>
      </div>
    </div>
  );
}
