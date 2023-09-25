import "./logOff.scss";
import { useRef, useEffect } from "react";
import Window from "../../assets/window/window.png";

function LogOff(props) {
  const textRef = useRef(null);
  const initialText = `${props.logOff ? "Logging Off..." : "Turning Your Computer Down..."}`;

  //useEffect that changes text on screen by timeout. It goes with log off and shut down screen
  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.textContent = `${props.logOff ? "It's almost done..." : "Now you joking, right?"}`;
      }
    }, 3000);
    const timerTwo = setTimeout(() => {
      if (textRef.current) {
        textRef.current.textContent = `${props.logOff ? "Nah... just kidding" : "You know it's just XP template?"}`;
      }
    }, 6000);
    const timerThree = setTimeout(() => {
      if (textRef.current) {
        props.handleBackToWindows();
        textRef.current.textContent = initialText;
      }
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerTwo);
      clearTimeout(timerThree);
    };
  }, [props.logOff, props.shutDown]);

  return (
    <div className="logoff-screen" style={props.style}>
      <div className="logoff-screen__top-bar"></div>
      <div className="logoff-screen__middle-bar">
        <img className="logoff-screen__middle-bar__img" src={Window} alt="temporary window logo, till i can't get something even funnier..." />
        <p className="logoff-screen__middle-bar__text" ref={textRef}>
          {initialText}
        </p>
      </div>
      <div className="logoff-screen__bottom-bar"></div>
    </div>
  );
}

export default LogOff;
