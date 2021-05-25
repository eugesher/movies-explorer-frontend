import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__link-list">
        <li className="portfolio__link-list-item">
          <a
            href="https://github.com/eugesher/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Статичный сайт <span className="portfolio__link-arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__link-list-item">
          <a
            href="https://github.com/eugesher/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Адаптивный сайт <span className="portfolio__link-arrow">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__link-list-item">
          <a
            href="https://github.com/eugesher/react-mesto-auth"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Одностраничное приложение <span className="portfolio__link-arrow">&#8599;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
