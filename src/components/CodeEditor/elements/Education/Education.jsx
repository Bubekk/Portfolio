import "./education.scss";
import Line from "../Line/Line";
import Object from "../Object/Object";

function Education(props) {
  return (
    <div className="education">
      <Line number={17}>
        <span className="education__text education__text--one">const </span>
        <span className="education__text education__text--two">myEducation </span>
        <span className="education__text education__text--three">&#61; </span>
        <span className="education__text education__text--square-bracket">&#91;</span>
      </Line>
      <Object
        bracketOpen={18}
        idNum={19}
        id="0,"
        dateNum={20}
        date="08.23 - 09.23,"
        titleNum={21}
        title={`"frontend developer course - EU certification",`}
        objectiveNum={22}
        objective={`"Short EU course with exams and certification"`}
        bracketClose={23}
        comma={true}
      />
      <Object
        bracketOpen={24}
        idNum={25}
        id="1,"
        dateNum={26}
        date="08.2017 – 04.2020,"
        titleNum={27}
        title={`"GWSP CHORZOW - Game design and interactive graphics",`}
        objectiveNum={28}
        objective={`"Bachelor's degree completed thanks to a pixelart 2d game created in Unity"`}
        bracketClose={29}
        comma={true}
      />
      <Object
        bracketOpen={30}
        idNum={31}
        id="2,"
        dateNum={32}
        date="09.2012 – 08.2016,"
        titleNum={33}
        title={`"TECHNICAL SCHOOL NO. 7 IN ZABRZE - It and Bioengineering",`}
        objectiveNum={34}
        objective={`"IT technician title confirmed by a state examination"`}
        bracketClose={35}
        comma={false}
      />
      <Line number={36}>
        <span className="education__text education__text--square-bracket education__text--square-bracket--close">&#93;</span>
      </Line>
    </div>
  );
}

export default Education;
