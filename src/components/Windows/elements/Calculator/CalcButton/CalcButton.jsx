import "./calcButton.scss";

function CalcButton(props) {
  return <button className={props.className}>{props.value}</button>;
}

export default CalcButton;
