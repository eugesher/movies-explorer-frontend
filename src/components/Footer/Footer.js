import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__app-description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__main-container">
          <p className="footer__copyright">&copy; 2020</p>
          <ul className="footer__social-list">
            <li className="footer__social-list-item">
              <a
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__social-list-item">
              <a
                href="https://github.com/eugesher"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                GitHub
              </a>
            </li>
            <li className="footer__social-list-item">
              <a
                href="https://www.linkedin.com/in/evgenii-chernyshov-3688201b6/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
