import { useState } from "react";
import "./Folder.scss";
import ProjectsContent from "./FolderContent/ProjectContent/ProjectsContent";
import PixelContent from "./FolderContent/PixelContent/PixelContent";
import UpperBar from "./UpperBar/UpperBar";

function Folder(props) {
  const handleClose = () => {
    props.handleFolder();
  };

  return (
    <div className="folder" style={props.style}>
      <nav className="folder__nav">
        <p className="folder__nav__filename">{props.fileName}</p>
        <div className="folder__nav__btns">
          <button className="folder__nav__btns__btn folder__nav__btns__btn--close" onClick={handleClose}>
            &#935;
          </button>
        </div>
      </nav>
      <div className="folder__content">
        <UpperBar />
        <section className="folder__content__main">
          {props.type === "projects" && <ProjectsContent />}
          {props.type === "pixelArt" && <PixelContent />}
        </section>
      </div>
    </div>
  );
}

export default Folder;
