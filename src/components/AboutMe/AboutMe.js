import "./AboutMe.css";
import myPhoto from "../../images/me.png";
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
              <p className="about-me__name">Евгений</p>
              <p className="about-me__job">Фронтенд-разработчик, 31 год</p>
              <p className="about-me__summary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad excepturi maiores nisi
                reiciendis sint. Aliquam aperiam asperiores beatae consectetur dicta distinctio
                dolor doloremque, ea excepturi expedita explicabo fuga fugit hic itaque laboriosam
                maxime minima, molestiae molestias non omnis pariatur placeat qui ratione
                reprehenderit vel vitae voluptatum. Iure perferendis ut voluptates!
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
                  LinkedIn
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
