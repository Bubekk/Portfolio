import "./footerButton.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../../../contexts/ImageContext";

function FooterButton(props) {
  const { icons } = useContext(ImageContext);

  const iconSrc = props.icon == "logoff" ? icons["logoffIcon"] : icons["shutdownIcon"];

  const handleClickFunction = () => {
    if (props.btnType == "logoff") {
      props.handleLogOff();
    } else {
      props.handleShutDown();
    }
  };

  return (
    <div className="btn-container">
      <button className={`btn-container__btn btn-container__btn--${props.btnType}`} onClick={handleClickFunction}>
        <img className="btn-container__btn__img" src={iconSrc} alt="shut down button" />
      </button>
      <p className="btn-container__btn__text"> {props.text} </p>
    </div>
  );
}

export default FooterButton;
