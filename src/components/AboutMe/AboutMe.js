import "./AboutMe.css";
import myPhoto from "../../images/vit.png";
import { imgAltTexts } from "../../utils/constants";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__content">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__main-container">
          <div className="about-me__column-container">
            <div className="about-me__info">
              <p className="about-me__name">Виталий</p>
              <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
              <p className="about-me__summary">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и
                дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015
                года работал в компании «СКБ Контур». После того, как прошёл курс по
                веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <ul className="about-me__social-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/evgenii-chernyshov-3688201b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/eugesher"
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <img src={myPhoto} alt={imgAltTexts.myPhoto} className="about-me__photo" />
        </div>
        <Portfolio />
      </div>
    </section>
  );
}
