import "./startMenu.scss";
import StartButton from "./Button/StartButton";
import Avatar from "../../../../assets/icons/avatar.png";
import Logoff from "../../../../assets/icons/logoff.png";
import ShutDown from "../../../../assets/icons/shutdown.png";
function StartMenu(props) {
  return (
    <div className="start-menu">
      <nav className="start-menu__nav">
        <div className="start-menu__nav__avatar">
          <img src={Avatar} alt="" />
        </div>
        <p className="start-menu__nav__username">User</p>
      </nav>
      <div className="start-menu__container">
        <div className="start-menu__container__btns">
          <StartButton icon="calc" text="Calculator" />
          <StartButton icon="minesweeper" text="Minesweeper/Saper" />
        </div>
        <div className="start-menu__container__contact"></div>
      </div>
      <footer className="start-menu__footer">
        <div className="start-menu__footer__btn-container">
          <button className="start-menu__footer__btn-container__btn start-menu__footer__btn-container__btn--logoff">
            <img className="start-menu__footer__btn-container__btn__img" src={Logoff} alt="logoff button" />
          </button>
          <p className="start-menu__footer__btn-container__btn__text">Log Off</p>
        </div>
        <div className="start-menu__footer__btn-container">
          <button className="start-menu__footer__btn-container__btn start-menu__footer__btn-container__btn--shutdown">
            <img className="start-menu__footer__btn-container__btn__img" src={ShutDown} alt="shut down button" />
          </button>
          <p className="start-menu__footer__btn-container__btn__text">Turn Off Computer</p>
        </div>
      </footer>
    </div>
  );
}

export default StartMenu;

{
  /* <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by Freepik - Flaticon</a> logout icon  */
}
