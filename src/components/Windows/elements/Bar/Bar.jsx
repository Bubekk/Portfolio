import "./bar.scss";

function Bar(props) {
  return (
    <nav className="bar">
      <div className="bar__start">
        <p className="bar__start__text">Start</p>
      </div>
      <div className="bar__clock">
        <p className="bar__clock__text bar__clock__text--hour">08</p>
        <p className="bar__clock__text bar__clock__text--colon">:</p>
        <p className="bar__clock__text bar__clock__text--min">08</p>
      </div>
    </nav>
  );
}

export default Bar;
