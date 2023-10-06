import "./startButton.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../../contexts/ImageContext";

function StartButton(props) {
  const { icons } = useContext(ImageContext);

  const handleClick = () => {
    if (props.type === "calc") {
      props.handleCalculator("Calculator");
    } else {
      props.handleSaper("SaperError");
    }
  };

  const iconSrc = props.icon == "calc" ? icons["calcIcon"] : icons["minesweeperIcon"];

  return (
    <button className="start-btn" onClick={handleClick}>
      <img className="start-btn__icon" src={iconSrc} alt="calculator icon" />
      <p className="start-btn__text">{props.text}</p>
    </button>
  );
}

export default StartButton;
