import "./Promo.css";
import promoLogo from "../../images/landing-logo.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__column">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href={"#about"} className="promo__link">
            Узнать больше
          </a>
        </div>
        <div className="promo__column">
          <img src={promoLogo} alt="промо логотип" className="promo__logo" />
        </div>
      </div>
    </section>
  );
}
