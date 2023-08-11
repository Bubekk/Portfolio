import "./footerButton.scss";
import LogOff from "../../../../../../assets/icons/logoff.png";
import ShutDown from "../../../../../../assets/icons/shutdown.png";

function FooterButton(props) {
  const iconSrc = props.icon == "logoff" ? LogOff : ShutDown;
  return (
    <div className="btn-container">
      <button className={`btn-container__btn btn-container__btn--${props.btnType}`}>
        <img className="btn-container__btn__img" src={iconSrc} alt="shut down button" />
      </button>
      <p className="btn-container__btn__text"> {props.text} </p>
    </div>
  );
}

export default FooterButton;
