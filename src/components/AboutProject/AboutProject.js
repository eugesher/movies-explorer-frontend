import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section id="about" className="about-project">
      <div className="about-project__content">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info-container">
          <div className="about-project__info-column">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div className="about-project__info-column">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__time-bar">
          <p className="about-project__time-bar-spent about-project__time-bar-spent_column_left">
            1 неделя
          </p>
          <p className="about-project__time-bar-spent about-project__time-bar-spent_column_right">
            4 недели
          </p>
          <p className="about-project__time-bar-caption">Back-end</p>
          <p className="about-project__time-bar-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}
