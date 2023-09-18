import "./skills.scss";
import Arr from "../Arr/Arr";
import Line from "../Line/Line";
import htmlIcon from "../../../../assets/icons/html.svg";
import cssIcon from "../../../../assets/icons/css.svg";
import jsIcon from "../../../../assets/icons/js.svg";
import reactIcon from "../../../../assets/icons/react.svg";
import vueIcon from "../../../../assets/icons/vue.svg";
import pythonIcon from "../../../../assets/icons/python.svg";
import illustratorIcon from "../../../../assets/icons/illustrator.png";
import photosopIcon from "../../../../assets/icons/photoshop.png";
import figmaIcon from "../../../../assets/icons/figma.png";

function Skills(props) {
  return (
    <div className="skills">
      <Line number={13}>
        <span className="skills__text skills__text--one">let </span>
        <span className="skills__text skills__text--two">mySkillSet </span>
        <span className="skills__text skills__text--three">&#61; </span>
        <span className="skills__text skills__text--bracket">&#123; </span>
      </Line>
      <Line number={14}>
        <span className="skills__learned--one">learned</span>
        <span>&#58; </span>
        <Arr>
          <img className="arr__icon" src={htmlIcon} alt="html icon" title="HTML5" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={cssIcon} alt="css icon" title="CSS" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={jsIcon} alt="js icon" title="JavaScript" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={reactIcon} alt="react icon" title="React JS" />
        </Arr>
        +
        <Arr comma={true}>
          <img className="arr__icon" src={illustratorIcon} alt="illustrator icon" title="Adobe Illustrator" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={photosopIcon} alt="photoshop icon" title="Adobe Photoshop" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={figmaIcon} alt="figma icon" title="Figma" />
        </Arr>
      </Line>
      <Line number={15}>
        <span className="skills__learning--one">learning</span>
        <span>&#58; </span>
        <Arr>
          <img className="arr__icon" src={vueIcon} alt="vue icon" title="Vue JS" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={pythonIcon} alt="python icon" title="Python" />
        </Arr>
      </Line>
      <Line number={16}>
        <span className="skills__text skills__text--bracket skills__text--bracket--close">&#125; </span>
      </Line>
    </div>
  );
}

export default Skills;
