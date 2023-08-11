import { useEffect, useState } from "react";
import "./bar.scss";

function Bar(props) {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date();
      setTime({
        hour: newDate.getHours(),
        min: newDate.getMinutes(),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  const handleStartClick = () => {
    props.handleStartMenuBtn();
  };

  return (
    <nav className="bar">
      <button className="bar__start" onClick={handleStartClick}>
        <p className="bar__start__text">Start</p>
      </button>
      <div className="bar__clock">
        <p className="bar__clock__text bar__clock__text--hour">{formatTime(time.hour)}</p>
        <p className="bar__clock__text bar__clock__text--colon">:</p>
        <p className="bar__clock__text bar__clock__text--min">{formatTime(time.min)}</p>
      </div>
    </nav>
  );
}

export default Bar;
