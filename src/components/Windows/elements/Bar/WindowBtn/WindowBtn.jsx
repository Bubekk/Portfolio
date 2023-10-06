import "./WindowBtn.scss";

function WindowBtn(props) {
  const handleActive = () => {
    if (props.propertyName === "Resume") {
      props.handleActiveWindow("resume");
    } else if (props.propertyName === "Projects") {
      props.handleActiveWindow("projects");
    } else if (props.propertyName === "Pixels") {
      props.handleActiveWindow("pixelArt");
    } else if (props.propertyName === "Calculator") {
      props.handleActiveWindow("calc");
    } else if (props.propertyName === "Gallery") {
      props.handleActiveWindow("gallery");
    }
  };

  return (
    <button style={props.style} className="windowBtn" onClick={handleActive}>
      {props.propertyName}
    </button>
  );
}

export default WindowBtn;
