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
        <div className="start-menu__container__contact">
          <a className="start-menu__container__contact__link start-menu__container__contact__link--mail" href="mailto: sebastian.kubanski@gmail.com">
            <img src={icons["mailIcon"]} alt="mail link icon" />
            <p>Sebastian Kubanski</p>
          </a>
          <a className="start-menu__container__contact__link start-menu__container__contact__link--phone" href="tel: 536454900">
            <img src={icons["phoneIcon"]} alt="phone link icon" />
            <p>+48 536 454 900</p>
          </a>
          <a className="start-menu__container__contact__link start-menu__container__contact__link--github" href="https://github.com/Bubekk">
            <img src={icons["gitIcon"]} alt="github link icon" />
            <p>github.com/Bubekk</p>
          </a>
          <a
            className="start-menu__container__contact__link start-menu__container__contact__link--linkedin"
            href="https://www.linkedin.com/in/sebastian-kubański/"
          >
            <img src={icons["linkedinIcon"]} alt="linkedin icon link" />
            <p>linkedin.com/sebastian-kubański</p>
          </a>
        </div>
      </div>
      <Footer handleLogOff={props.handleLogOff} handleShutDown={props.handleShutDown} />
    </div>
  );
}

export default StartMenu;

{
}
