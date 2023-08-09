import "./education.scss";
import Line from "../Line/Line";
import Object from "../Object/Object";

function Education(props) {
  return (
    <div className="education">
      <Line number={13}>
        <span className="education__text education__text--one">const </span>
        <span className="education__text education__text--two">myEducation </span>
        <span className="education__text education__text--three">&#61; </span>
        <span className="education__text education__text--square-bracket">&#91;</span>
      </Line>
      <Object
        bracketOpen={14}
        idNum={15}
        id="0,"
        dateNum={16}
        date="01.01.01,"
        titleNum={17}
        title="edu1,"
        objectiveNum={18}
        objective="objective1"
        bracketClose={19}
        comma={true}
      />
      <Object
        bracketOpen={20}
        idNum={21}
        id="1,"
        dateNum={22}
        date="01.01.01,"
        titleNum={23}
        title="edu1,"
        objectiveNum={24}
        objective="objective1"
        bracketClose={25}
        comma={true}
      />
      <Object
        bracketOpen={26}
        idNum={27}
        id="2,"
        dateNum={28}
        date="01.01.01,"
        titleNum={29}
        title="edu1,"
        objectiveNum={30}
        objective="objective1"
        bracketClose={31}
        comma={false}
      />
      <Line number={32}>
        <span className="education__text education__text--square-bracket education__text--square-bracket--close">&#93;</span>
      </Line>
    </div>
  );
}

export default Education;
