import "./object.scss";
import Line from "../Line/Line";

function Object(props) {
  const objectwo = [{}];
  return (
    <div className="object">
      <Line number={props.bracketOpen}>
        <span className="object__bracket">&#123;</span>
      </Line>
      <Line number={props.idNum}>
        <span className="object__prop object__prop--name">id: </span>
        <span className="object__prop object__prop--id">{props.id}</span>
      </Line>
      <Line number={props.dateNum}>
        <span className="object__prop object__prop--name">date: </span>
        <span className="object__prop object__prop--date">{props.date}</span>
      </Line>
      <Line number={props.titleNum}>
        <span className="object__prop object__prop--name">title: </span>
        <span className="object__prop object__prop--title">{props.title}</span>
      </Line>
      <Line number={props.objectiveNum}>
        <span className="object__prop object__prop--name">objective: </span>{" "}
        <span className="object__prop object__prop--objective">{props.objective}</span>
      </Line>
      <Line number={props.bracketClose}>
        <span className="object__bracket object__bracket--close">&#125;</span> {props.coma ? <span>&#44;</span> : ""}
      </Line>
    </div>
  );
}

export default Object;
