import { useEffect, useState } from "react";
import "./Folder.scss";
import ProjectsContent from "./FolderContent/ProjectContent/ProjectsContent";
import PixelContent from "./FolderContent/PixelContent/PixelContent";
import UpperBar from "./UpperBar/UpperBar";

function Folder(props) {
  //Handling Close btn of whole folder and using backInFolder function to set all states to false
  const handleClose = () => {
    props.handleFolder();
    backInFolder();
  };

  //State of all projects. If you need to add project add a object element first.
  const [projects, setProjects] = useState({
    project1: false,
    project2: false,
  });

  //State of all pixels projects. If you need to add pixel project add a object element first.
  const [pixels, setPixels] = useState({
    pixel1: false,
    pixel2: false,
  });

  //state of last opened project
  const [lastProject, setLastProject] = useState(null);

  //state of last opened pixel project
  const [lastPixel, setLastPixel] = useState(null);

  //useEffect for checking last opened project and setting the state of it
  useEffect(() => {
    if (projects.project1) {
      setLastProject(1);
    } else if (projects.project2) {
      setLastProject(2);
    }
  }, [projects]);

  //useEffect for checking last opened pixel project and setting the state of it
  useEffect(() => {
    if (pixels.pixel1) {
      setLastPixel(1);
    } else if (pixels.pixel2) {
      setLastPixel(2);
    }
  }, [pixels]);

  //function for dynamic setting state of project
  const showProject = (projectNumber) => {
    setProjects((prevProjects) => ({
      ...prevProjects,
      [`project${projectNumber}`]: true,
    }));
  };

  //function for dynamic setting state of pixel project
  const showPixel = (pixelNumber) => {
    setPixels((prevPixels) => ({
      ...prevPixels,
      [`pixel${pixelNumber}`]: true,
    }));
  };

  //function that handle Back btn setting all projects and states to false. Backing up to main content of folder
  const backInFolder = () => {
    setProjects({
      project1: false,
      project2: false,
    });
    setPixels({
      pixel1: false,
      pixel2: false,
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
          {/* Dynamic content rendering in main folder window */}
          {props.type === "projects" && <ProjectsContent projects={projects} showProject={showProject} />}
          {props.type === "pixelArt" && <PixelContent projects={pixels} showPixel={showPixel} handleGallery={props.handleGallery} />}
        </section>
      </div>
    </div>
  );
}

export default Folder;
