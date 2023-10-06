import "./calcButton.scss";

function CalcButton(props) {
  const handleClick = (e) => {
    props.function(e);
  };

  return (
    <button className={props.className} value={props.value} onClick={handleClick}>
      {props.value}
    </button>
  );
}

export default CalcButton;
