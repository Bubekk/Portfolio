import "./calcButton.scss";

function CalcButton(props) {
  const handleClick = (e) => {
    // if (props.type === "equal") {
    //   props.handleEqual();
    // } else if (props.type === "operation") {
    //   props.handleCalcOperation(e);
    // } else {
    //   props.handleCalcInput(e);
    // }
    props.function(e);
  };

  return (
    <button className={props.className} value={props.value} onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default CalcButton;
