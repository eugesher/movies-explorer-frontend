import "./Promo.css";
import promoLogo from "../../images/landing-logo.svg";
import { imgAltTexts } from "../../utils/constants";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__column">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__info">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          {/*todo*/}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="promo__link">
            Узнать больше
          </a>
        </div>
        <div className="promo__column">
          <img src={promoLogo} alt={imgAltTexts.promoLogo} className="promo__logo" />
        </div>
      </div>
    </section>
  );
}
