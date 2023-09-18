import { useState } from "react";
import "./Folder.scss";

function Folder(props) {
  const handleClose = () => {
    props.handleFolder();
  };

  return (
    <div className={`folder`} style={props.style}>
      <nav className="folder__nav">
        <p className="folder__nav__filename">{props.type}</p>
        <div className="folder__nav__btns">
          <button className="folder__nav__btns__btn folder__nav__btns__btn--close" onClick={handleClose}>
            &#935;
          </button>
        </div>
      </nav>
      I am folder
    </div>
  );
}

export default Folder;
