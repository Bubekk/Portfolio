import "./skills.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../contexts/ImageContext";
import Arr from "../Arr/Arr";
import Line from "../Line/Line";

function Skills(props) {
  const { skillsIcons } = useContext(ImageContext);

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
          <img className="arr__icon" src={skillsIcons["htmlIcon"]} alt="html icon" title="HTML5" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={skillsIcons["cssIcon"]} alt="css icon" title="CSS" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={skillsIcons["jsIcon"]} alt="js icon" title="JavaScript" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={skillsIcons["reactIcon"]} alt="react icon" title="React JS" />
        </Arr>
        +
        <Arr comma={true}>
          <img className="arr__icon" src={skillsIcons["illustratorIcon"]} alt="illustrator icon" title="Adobe Illustrator" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={skillsIcons["photoshopIcon"]} alt="photoshop icon" title="Adobe Photoshop" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={skillsIcons["figmaIcon"]} alt="figma icon" title="Figma" />
        </Arr>
      </Line>
      <Line number={15}>
        <span className="skills__learning--one">learning</span>
        <span>&#58; </span>
        <Arr>
          <img className="arr__icon" src={skillsIcons["vueIcon"]} alt="vue icon" title="Vue JS" />
          <span className="arr__text--comma"> &#44;</span>
          <img className="arr__icon" src={skillsIcons["pythonIcon"]} alt="python icon" title="Python" />
        </Arr>
      </Line>
      <Line number={16}>
        <span className="skills__text skills__text--bracket skills__text--bracket--close">&#125; </span>
      </Line>
    </div>
  );
}

export default Skills;
