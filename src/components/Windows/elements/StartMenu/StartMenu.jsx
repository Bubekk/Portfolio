import "./startMenu.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../contexts/ImageContext";
import StartButton from "./Button/StartButton";
import Footer from "./Footer/Footer";

function StartMenu(props) {
  const { icons } = useContext(ImageContext);
  return (
    <div className="start-menu" style={props.style}>
      <nav className="start-menu__nav">
        <div className="start-menu__nav__avatar">
          <img src={icons["avatar"]} alt="" />
        </div>
        <p className="start-menu__nav__username">User</p>
      </nav>
      <div className="start-menu__container">
        <div className="start-menu__container__btns">
          <StartButton icon="calc" type="calc" text="Calculator" handleCalculator={props.handleCalculator} />
          <StartButton icon="minesweeper" type="saper" text="Minesweeper/Saper" handleSaper={props.handleSaper} />
        </div>
        <div className="start-menu__container__contact"></div>
      </div>
      <Footer handleLogOff={props.handleLogOff} handleShutDown={props.handleShutDown} />
    </div>
  );
}

export default StartMenu;

{
  /* <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by Freepik - Flaticon</a> logout icon  */
}
