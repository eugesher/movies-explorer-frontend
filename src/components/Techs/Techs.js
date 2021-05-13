import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <div className="techs__content">
        <h2 className="techs__title">Технологии</h2>
        <p className="techs__info-title">7 технологий</p>
        <p className="techs__info-description">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__tag-list">
          <li className="techs__tag-list-item">
            <p className="techs__tag">HTML</p>
          </li>
          <li className="techs__tag-list-item">
            <p className="techs__tag">CSS</p>
          </li>
          <li className="techs__tag-list-item">
            <p className="techs__tag">JS</p>
          </li>
          <li className="techs__tag-list-item">
            <p className="techs__tag">React</p>
          </li>
          <li className="techs__tag-list-item">
            <p className="techs__tag">Git</p>
          </li>
          <li className="techs__tag-list-item">
            <p className="techs__tag">Express.js</p>
          </li>
          <li className="techs__tag-list-item">
            <p className="techs__tag">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
