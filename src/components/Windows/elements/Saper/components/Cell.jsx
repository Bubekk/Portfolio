import { useState } from "react";
import "./Cell.scss";

function Cell(props) {
  const [open, setOpen] = useState(false);
  const [mined, setMined] = useState(false);
  const [flagged, setFlagged] = useState(false);

  const handleClick = (e) => {
    if (e.type === "click") {
      if (props.bomb) {
        setMined(!mined);
        console.log("bomba!");
      } else {
        setOpen(!open);
        console.log("nie ma bomby");
      }
    } else if (e.type === "contextmenu") {
      setFlagged(!flagged);
      e.preventDefault();
    }
  };

  return (
    <button
      className={`cell cell${flagged ? "--flagged" : "" || open ? "--open" : mined ? "--mined" : ""}`}
      onClick={handleClick}
      onContextMenu={handleClick}
    >
      {props.value}
    </button>
  );
}

export default Cell;
