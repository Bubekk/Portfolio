import "./startButton.scss";
import CalcIcon from "../../../../../assets/icons/calc.jpg";
import MineSweeperIcon from "../../../../../assets/icons/minesweeper.png";

function StartButton(props) {
  const iconSrc = props.icon == "calc" ? CalcIcon : MineSweeperIcon;
  return (
    <button className="start-btn">
      <img className="start-btn__icon" src={iconSrc} alt="calculator icon" />
      <p className="start-btn__text">{props.text}</p>
    </button>
  );
}

export default StartButton;
