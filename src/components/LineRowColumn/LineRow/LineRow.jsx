import "./styles/lineRow.scss";

function LineRow(props) {
  return (
    <div className="linerow">
      <div className="linerow__number">
        <span>{props.number}</span>
      </div>
      <div className="linerow__arrow">{props.arrow && <span>&#8744;</span>}</div>
    </div>
  );
}

export default LineRow;
