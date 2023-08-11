import "./startMenu.scss";
import StartButton from "./Button/StartButton";
import Avatar from "../../../../assets/icons/avatar.png";
import Footer from "./Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default StartMenu;

{
  /* <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by Freepik - Flaticon</a> logout icon  */
}
