import "./experience.scss";
import Line from "../Line/Line";
import Object from "../Object/Object";

function Education(props) {
  return (
    <div className="education">
      <Line number={37}>
        <span className="experience__text experience__text--one">let </span>
        <span className="experience__text experience__text--two">myExperience </span>
        <span className="experience__text experience__text--three">&#61; </span>
        <span className="experience__text experience__text--square-bracket">&#91;</span>
      </Line>
      <Object
        bracketOpen={38}
        idNum={39}
        id={`"CIRF / tax administration office / Katowice",`}
        dateNum={40}
        date="01.2019 – 10.2022,"
        titleNum={41}
        title={`"IT/ IT ADMIN",`}
        objectiveNum={42}
        objective={`"Direct IT support for emplyees of Ministry of Finance. Maintenance and administration of network infrastructure."`}
        bracketClose={43}
        comma={true}
      />
      <Object
        bracketOpen={44}
        idNum={45}
        id={`"IT Engineering / interactive agency / Zabrze",`}
        dateNum={46}
        date="03.2018 – 12.2018,"
        titleNum={47}
        title={`"PROJECT MANAGER/ GRAPHIC DESIGNER",`}
        objectiveNum={48}
        objective={`"Content with customers. WebDev projects for customers. Graphic design of logos and websites"`}
        bracketClose={49}
        comma={true}
      />
      <Object
        bracketOpen={50}
        idNum={51}
        id={`"SOLV / interactive agency / Swietochlowice",`}
        dateNum={52}
        date="04.2017 – 10.2017,"
        titleNum={53}
        title={`"TRADE SPECIALIST",`}
        objectiveNum={54}
        objective={`"Establishing contact with customers. Consulting on e-commerce and company branding"`}
        bracketClose={55}
        comma={false}
      />
      <Line number={56}>
        <span className="experience__text experience__text--square-bracket experience__text--square-bracket--close">&#93;</span>
      </Line>
    </div>
  );
}

export default Education;
