import "./styles/LinesHighlight.scss";
import { useState } from "react";

function LinesHighlight({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`line-highlight ${isHovered ? `highlighted` : ``}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

export default LinesHighlight;
