import { useEffect, useState } from "react";
import "./Folder.scss";
import ProjectsContent from "./FolderContent/ProjectContent/ProjectsContent";
import PixelContent from "./FolderContent/PixelContent/PixelContent";
import UpperBar from "./UpperBar/UpperBar";

function Folder(props) {
  const handleClose = () => {
    props.handleFolder();
    backInFolder();
  };

  const [projects, setProjects] = useState({
    project1: false,
    project2: false,
    project3: false,
  });

  const [pixels, setPixels] = useState({
    pixel1: false,
    pixel2: false,
    pixel3: false,
  });

  const [lastProject, setLastProject] = useState(null);

  const [lastPixel, setLastPixel] = useState(null);

  useEffect(() => {
    if (projects.project1) {
      setLastProject(1);
    } else if (projects.project2) {
      setLastProject(2);
    } else if (projects.project3) {
      setLastProject(3);
    }
  }, [projects]);

  useEffect(() => {
    if (pixels.pixel1) {
      setLastPixel(1);
    } else if (pixels.pixel2) {
      setLastPixel(2);
    } else if (pixels.pixel3) {
      setLastPixel(3);
    }
  }, [pixels]);

  const showProject = (projectNumber) => {
    setProjects((prevProjects) => ({
      ...prevProjects,
      [`project${projectNumber}`]: true,
    }));
  };

  const showPixel = (pixelNumber) => {
    setPixels((prevPixels) => ({
      ...prevPixels,
      [`pixel${pixelNumber}`]: true,
    }));
  };

  const backInFolder = () => {
    setProjects({
      project1: false,
      project2: false,
      project3: false,
    });
    setPixels({
      pixel1: false,
      pixel2: false,
      pixel3: false,
    });
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
        <UpperBar
          backInFolder={backInFolder}
          backInLast={showProject}
          backInLastPixel={showPixel}
          projects={projects}
          pixels={pixels}
          lastProject={lastProject}
          lastPixel={lastPixel}
        />
        <section className="folder__content__main">
          {props.type === "projects" && <ProjectsContent projects={projects} showProject={showProject} />}
          {props.type === "pixelArt" && <PixelContent projects={pixels} showPixel={showPixel} />}
        </section>
      </div>
    </div>
  );
}

export default Folder;
