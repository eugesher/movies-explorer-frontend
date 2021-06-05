import "./Landing.css";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";

export default function Landing() {
  return (
    <main className="landing">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}
