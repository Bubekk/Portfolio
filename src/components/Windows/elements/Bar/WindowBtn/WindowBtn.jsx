import "./WindowBtn.scss";

function WindowBtn(props) {
  // const handleActive = () => {
  //   if (props.propertyName === "Resume") {
  //     props.handleActiveWindow("Resume");
  //   } else if (props.propertyName === "Projects") {
  //     props.handleActiveWindow("Projects");
  //   } else if (props.propertyName === "Pixels") {
  //     props.handleActiveWindow("Pixels");
  //   } else if (props.propertyName === "Calculator") {
  //     props.handleActiveWindow("Calculator");
  //   } else if (props.propertyName === "Gallery") {
  //     props.handleActiveWindow("Gallery");
  //   } else if (props.propertyName === "SaperError") {
  //     props.handleActiveWindow("SaperError");
  //   }
  // };

  return (
    <button
      style={props.style}
      className={`windowBtn ${props.className}`}
      onClick={() => {
        props.handleActiveWindow(props.propertyName);
      }}
    >
      {props.propertyName}
    </button>
  );
}

export default WindowBtn;
