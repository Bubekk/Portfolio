import "./arr.scss";

function Arr({ comma, children }) {
  return (
    <div className="arr">
      <span className="arr__text--sq-bracket">&#91;</span>
      {children}
      <span className="arr__text--sq-bracket arr__text--sq-bracket--close">&#93;</span>
      {comma ? <span> &#44;</span> : ""}
    </div>
  );
}

export default Arr;
