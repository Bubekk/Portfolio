import "../MainFunction/mainFunction.scss";
import NavBar from "../NavBar/NavBar";
import Line from "../Line/Line";
import AboutMe from "../AbtMe/AboutMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";

function MainFunction(props) {
  return (
    <div className="main-function">
      <NavBar />
      <Line number={1}>
        <span className="main-function__text main-function__text--one">function </span>{" "}
        <span className="main-function__text main-function__text--two">SebastianKubanski()</span>{" "}
        <span className="main-function__text main-function__text--bracket">&#123;</span>
      </Line>
      <Line number={2}>
        <span className="main-function__text main-function__text--comment">//Self-taught code passionate</span>
      </Line>
      <Line number={3}>
        <span className="main-function__text main-function__text--comment">//Ex IT Admin</span>
      </Line>
      <Line number={4}>
        <span className="main-function__text main-function__text--comment">//Tech/AI/Game addict</span>
      </Line>
      <Line number={5}>
        <span className="main-function__text main-function__text--four">return </span>{" "}
        <span className="main-function__text main-function__text--parenthesis">&#40;</span>{" "}
      </Line>
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Line number={0}>
        <span className="main-function__text main-function__text main-function__text--parenthesis main-function__text--parenthesis--close">
          &#41;
        </span>
      </Line>
      <Line number={0}>
        <span className="main-function__text main-function__text--bracket main-function__text--bracket--close">&#125;</span>
      </Line>
    </div>
  );
}

export default MainFunction;
