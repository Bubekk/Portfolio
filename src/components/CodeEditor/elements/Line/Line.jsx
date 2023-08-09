import "./line.scss";
import "./linesHighlight.scss";
import { useState } from "react";

function Line({ number, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="line">
      <div
        className={`line__highlight ${isHovered ? `highlighted` : ``}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`line__number ${isHovered ? `highlighted-number` : ``}`}>{number}</div>
        <div className="line__text">{children}</div>
      </div>
    </div>
  );
}

export default Line;
