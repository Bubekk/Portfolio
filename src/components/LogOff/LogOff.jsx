import "./logOff.scss";
import { useRef, useEffect } from "react";
import Window from "../../assets/window/window.png";

function LogOff(props) {
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.textContent = "It's almost done...";
      }
    }, 3000);
    const timerTwo = setTimeout(() => {
      if (textRef.current) {
        textRef.current.textContent = "Nah... just kidding";
      }
    }, 6000);
    const timerThree = setTimeout(() => {
      if (textRef.current) {
        props.handleBackToWindows();
        textRef.current.textContent = "Logging off...";
      }
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerTwo);
      clearTimeout(timerThree);
    };
  }, [props.logOff]);

  return (
    <div className="logoff-screen" style={props.style}>
      <div className="logoff-screen__top-bar"></div>
      <div className="logoff-screen__middle-bar">
        <img className="logoff-screen__middle-bar__img" src={Window} alt="temporary window logo, till i can't get something even funnier..." />
        <p className="logoff-screen__middle-bar__text" ref={textRef}>
          Logging off...
        </p>
      </div>
      <div className="logoff-screen__bottom-bar"></div>
    </div>
  );
}

export default LogOff;
