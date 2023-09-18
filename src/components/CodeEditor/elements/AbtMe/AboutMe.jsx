import "./aboutMe.scss";
import Line from "../Line/Line";

function AboutMe(props) {
  return (
    <div className="abt-me">
      <Line number={6}>
        <span className="abt-me__text abt-me__text--one">const </span>
        <span className="abt-me__text abt-me__text--two">aboutMe </span>
        <span className="abt-me__text abt-me__text--three">&#61; </span>
        <span className="abt-me__text abt-me__text--four">&#40;&#41; </span>
        <span className="abt-me__text abt-me__text--five">&#8658; </span>
        <span className="abt-me__text abt-me__text--bracket">&#123;</span>
      </Line>
      <div className="abt-me__content">
        <Line number={7}>
          <span className="abt-me__content__text"> // I AM A FORMER IT ADMIN WITH TECHNICAL EDUCATION AND EXPERIENCE IN THIS PROFESSION.</span>
        </Line>
        <Line number={8}>
          <span className="abt-me__content__text">// MY GOAL IS TO BECOME A FRONTEND/FULLSTACK DEVELOPER.</span>
        </Line>
        <Line number={9}>
          <span className="abt-me__content__text">// I AM GOOD AT CREATIVE PROBLEM SOLVING AND COMMUNICATION.</span>
        </Line>
        <Line number={10}>
          <span className="abt-me__content__text">// I AM ALWAYS PATIENT AND TRY TO BE HELPFUL AS I CAN.</span>
        </Line>
        <Line number={11}>
          <span className="abt-me__content__text">// MY BIG HOBBY IS PIXEL ART, I USED TO CREATE IT COMMERCIALLY.</span>
        </Line>
      </div>
      <Line number={12}>
        <span className="abt-me__text abt-me__text--bracket abt-me__text--bracket--close">&#125;</span>
      </Line>
    </div>
  );
}

export default AboutMe;
