import "./styles/LineRowColumn.scss";
import LineRow from "./LineRow/LineRow";
import MainFunction from "../../Main/MainFunction";

function LineRowColumn(props) {
  return (
    <div className="lines">
      <div className="lines__import">
        <LineRow number="1" />
        <span>import portfolia jafa jada jada</span>
      </div>
      <LineRow number="2" />
      <div className="lines__mainfunction">
        <LineRow number="3" arrow="true" />
        <MainFunction />
      </div>
      <LineRow number="4" />
      <LineRow number="5" />
      <LineRow number="6" />
      <LineRow number="7" />
      <LineRow number="8" />
      <LineRow number="9" />
      <LineRow number="10" />
    </div>
  );
}

export default LineRowColumn;
