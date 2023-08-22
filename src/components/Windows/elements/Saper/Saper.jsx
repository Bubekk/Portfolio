import "./saper.scss";
import Board from "./components/Board";
import Game from "./utils/Game";

function Saper(props) {
  const handleClick = () => {
    props.handleSaper();
  };

  return (
    <div className="saper" style={props.style}>
      <nav className="saper__nav">
        <p className="saper__nav__filename">Minesweeper</p>
        <button className="saper__nav__btn saper__nav__btn--close" onClick={handleClick}>
          &#935;
        </button>
      </nav>
      <div className="saper__gamespace">
        <Board />
      </div>
    </div>
  );
}

export default Saper;
