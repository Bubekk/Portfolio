import "./experience.scss";
import Line from "../Line/Line";
import Object from "../Object/Object";

function Education(props) {
  return (
    <div className="education">
      <Line number={33}>
        <span className="experience__text experience__text--one">let </span>
        <span className="experience__text experience__text--two">myExperience </span>
        <span className="experience__text experience__text--three">&#61; </span>
        <span className="experience__text experience__text--square-bracket">&#91;</span>
      </Line>
      <Object
        bracketOpen={34}
        idNum={35}
        id="0,"
        dateNum={36}
        date="01.01.01,"
        titleNum={37}
        title="exp1,"
        objectiveNum={38}
        objective="objective1"
        bracketClose={39}
        comma={true}
      />
      <Object
        bracketOpen={40}
        idNum={41}
        id="1,"
        dateNum={42}
        date="01.01.01,"
        titleNum={43}
        title="exp1,"
        objectiveNum={44}
        objective="objective1"
        bracketClose={45}
        comma={true}
      />
      <Object
        bracketOpen={46}
        idNum={47}
        id="2,"
        dateNum={48}
        date="01.01.01,"
        titleNum={49}
        title="exp1,"
        objectiveNum={50}
        objective="objective1"
        bracketClose={51}
        comma={false}
      />
      <Line number={52}>
        <span className="experience__text experience__text--square-bracket experience__text--square-bracket--close">&#93;</span>
      </Line>
    </div>
  );
}

export default Education;
