import "./SaperError.scss";
import ErrorIcon from "../../../../../assets/icons/error.png";

function SaperError(props) {
  const handleClick = () => {
    props.handleSaper();
  };

  return (
    <div className="saper-error" style={props.style}>
      <nav className="saper-error__nav">
        <p className="saper-error__nav__filename">Minesweeper</p>
        <button className="saper-error__nav__btn saper-error__nav__btn--close" onClick={handleClick}>
          &#935;
        </button>
      </nav>
      <div className="saper-error__content">
        <img src={ErrorIcon} alt="error icon" />
        <p className="saper-error__content__text">Sorry! Minesweeper doesn't work! (yet)</p>
        <button className="saper-error__ok-btn" onClick={handleClick}>
          Ok!
        </button>
      </div>
    </div>
  );
}

export default SaperError;
