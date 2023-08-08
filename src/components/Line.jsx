import LineNumber from "./LineNumber";
import LinesHighlight from "./LinesHighlight";

function Line(props) {
  return (
    <div className="line">
      <LinesHighlight>
        <LineNumber number={1} />
        <div className="line__text">{props.linetext}</div>
      </LinesHighlight>
    </div>
  );
}

export default Line;
