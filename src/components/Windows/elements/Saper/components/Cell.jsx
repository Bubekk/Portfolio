import { useState } from "react";
import "./Cell.scss";

function Cell(props) {
  const [open, setOpen] = useState(false);
  const [flagged, setFlagged] = useState(false);

  const handleClick = (e) => {
    if (e.type === "click" && props.bomb) {
      setOpen(!open);
      console.log("bomba!");
    } else if (e.type === "contextmenu") {
      setFlagged(!flagged);
      e.preventDefault();
    }
  };

  return (
    <button className={`cell cell${flagged ? "--flagged" : "" || open ? "--open" : ""}`} onClick={handleClick} onContextMenu={handleClick}>
      {props.value}
    </button>
  );
}

export default Cell;
