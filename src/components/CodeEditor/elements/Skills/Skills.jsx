import "./skills.scss";
import Arr from "../Arr/Arr";
import Line from "../Line/Line";
import htmlIcon from "../../../../assets/icons/html.svg";
import cssIcon from "../../../../assets/icons/css.svg";
import jsIcon from "../../../../assets/icons/js.svg";
import reactIcon from "../../../../assets/icons/react.svg";
import vueIcon from "../../../../assets/icons/vue.svg";
import pythonIcon from "../../../../assets/icons/python.svg";

function Skills(props) {
  return (
    <div className="skills">
      <Line number={53}>
        <span className="skills__text skills__text--one">let </span>
        <span className="skills__text skills__text--two">mySkillSet </span>
        <span className="skills__text skills__text--three">&#61; </span>
        <span className="skills__text skills__text--bracket">&#123; </span>
      </Line>
      <Line number={54}>
        <span className="skills__learned--one">learned</span>
        <span>&#58; </span>
        <Arr comma={true}>
          <img className="arr__icon" src={htmlIcon} alt="html icon" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={cssIcon} alt="css icon" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={jsIcon} alt="js icon" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={reactIcon} alt="react icon" />
          <span className="arr__text--comma"> &#44;</span>
        </Arr>
      </Line>
      <Line number={55}>
        <span className="skills__learning--one">learning</span>
        <span>&#58; </span>
        <Arr>
          <img className="arr__icon" src={vueIcon} alt="vue icon" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={pythonIcon} alt="python icon" />
        </Arr>
      </Line>
      <Line number={56}>
        <span className="skills__text skills__text--bracket skills__text--bracket--close">&#125; </span>
      </Line>
    </div>
  );
}

export default Skills;
