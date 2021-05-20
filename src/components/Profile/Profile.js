import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form name="profileEdit" id="profile-edit" className="profile__edit-form">
          <label className="profile__input-container">
            <span className="profile__input-label">Имя</span>
            <input type="text" className="profile__input" />
          </label>
          <label className="profile__input-container">
            <span className="profile__input-label">E-mail</span>
            <input type="email" className="profile__input" />
          </label>
        </form>
      </div>
      <div className="profile__container">
        <button type="submit" form="profile-edit" className="profile__submit-button">
          Редактировать
        </button>
        <a href="#" className="profile__logout-link">
          Выйти из аккаунта
        </a>
      </div>
    </div>
  );
}
