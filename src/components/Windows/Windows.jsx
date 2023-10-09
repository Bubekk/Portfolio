import "./windows.scss";
import Bar from "./elements/Bar/Bar";
import StickyNote from "./elements/StickyNote/StickyNote";
import FileLink from "./elements/FileLink/FileLink";
import ResumeWindow from "./elements/ResumeWindow/ResumeWindow";
import Calculator from "./elements/Calculator/Calculator";
import Gallery from "./elements/PhotoGallery/Gallery";
import Saper from "./elements/Saper/Saper";
import SaperError from "./elements/Saper/SaperError/SaperError";
import Folder from "./elements/Folder/Folder";
import StartMenu from "./elements/StartMenu/StartMenu";
import { useState } from "react";

function Windows(props) {
  //state of opened window
  const [isVisible, setIsVisible] = useState({
    Resume: false,
    Calculator: false,
    SaperError: false,
    // isSaperVisible: false,
    Projects: false,
    Pixels: false,
    Gallery: false,
  });

  //state of active window. Not the same thing as the state above!
  const [activeWindow, setActiveWindow] = useState({
    Resume: false,
    Calculator: false,
    SaperError: false,
    // isSaperVisible: false,
    Projects: false,
    Pixels: false,
    Gallery: false,
  });

  const [isStartVisible, setIsStartVisible] = useState(false);
  const [whichPixel, setWhichPixel] = useState("");
  const [pixelId, setPixelId] = useState(0);

  //handling all windows opening with argument "window"
  const handleOpenVisible = (window) => {
    setIsVisible((prevIsVisible) => ({
      ...prevIsVisible,
      [window]: true,
    }));
    handleActiveWindow(window);
  };

  //handling closing buttons for all windows
  const handleCloseVisible = (window) => {
    setIsVisible((prevIsVisible) => ({
      ...prevIsVisible,
      [window]: false,
    }));
  };

  //handling which window should be on top with clicking anywhere on window space
  const handleActiveWindow = (window) => {
    setActiveWindow((prevActive) => {
      const updatedActiveWindows = {};
      for (const key in prevActive) {
        updatedActiveWindows[key] = false;
      }
      updatedActiveWindows[window] = true;
      return updatedActiveWindows;
    });
    console.log(window, activeWindow);
  };

  //handling gallery window opening
  const handleGalleryLink = (arg, id) => {
    setIsVisible((prevIsVisible) => ({
      ...prevIsVisible,
      Gallery: true,
    }));
    setWhichPixel(arg);
    setPixelId(id);
    setActiveWindow({
      resume: false,
      projects: false,
      pixelArt: false,
      gallery: true,
      calc: false,
    });
  };

  //handling start menu opening
  const handleStartMenuBtn = () => {
    setIsStartVisible(!isStartVisible);
  };

  return (
    <div className="windows" style={props.style}>
      <div className="windows__screen">
        <FileLink type="pdf" alt="link to resume and pdf icon" fileName="resume.pdf" handleResumeLink={handleOpenVisible} />
        <FileLink type="code" alt="link to resume and code icon" fileName="Portfolio.jsx" handleCodeEditorLink={props.handleCodeEditorLink} />
        <FileLink type="folder" alt="link to folder and folder icon" fileName="Projects" handleFolder={handleOpenVisible} />
        <FileLink type="folder" alt="link to folder and folder icon" fileName="Pixelart" handleFolder={handleOpenVisible} />
        <div className="windows__screen__sticky-notes">
          <StickyNote color="yellow" text="Remember to check Portfolio.jsx!!!" />
          <StickyNote color="blue" text="Read the resume.pdf, don't forget again!" />
          <StickyNote color="pink" text="I know.. there were no sticky notes in XP, but somehow I have to guide you, right?" />
          <StickyNote color="red" text="Remember to click twice on icons. it's XP after all ;) " />
        </div>
        <Folder
          type="projects"
          fileName="Projects"
          handleFolder={handleCloseVisible}
          style={{ display: isVisible["Projects"] ? "block" : "none", zIndex: activeWindow["Projects"] ? "2" : "0" }}
          handleActiveWindow={handleActiveWindow}
        />
        <Folder
          type="pixelArt"
          fileName="Pixels"
          handleFolder={handleCloseVisible}
          style={{
            display: isVisible["Pixels"] ? "block" : "none",
            top: "100px",
            left: "480px",
            zIndex: activeWindow["Pixels"] ? "2" : "0",
          }}
          handleActiveWindow={handleActiveWindow}
          handleGallery={handleGalleryLink}
        />
        <ResumeWindow
          type="Resume"
          handleResumeLink={handleCloseVisible}
          style={{ display: isVisible["Resume"] ? "block" : "none", zIndex: activeWindow["Resume"] ? "2" : "0" }}
          handleActiveWindow={handleActiveWindow}
        />
        <Calculator
          type="Calculator"
          // handleCalculator={handleCalculator}
          handleCalculator={handleCloseVisible}
          style={{ display: isVisible["Calculator"] ? "block" : "none", zIndex: activeWindow["Calculator"] ? "3" : "0" }}
          handleActiveWindow={handleActiveWindow}
        />
        <Gallery
          type="Gallery"
          handleGallery={handleCloseVisible}
          whichPixel={whichPixel}
          pixelId={pixelId}
          style={{
            display: isVisible["Gallery"] ? "block" : "none",
            top: "10px",
            left: "700px",
            zIndex: activeWindow["Gallery"] ? "2" : "0",
          }}
          handleActiveWindow={handleActiveWindow}
        />
        {/* Minesweeper/Saper is not ready yet! */}
        {/* <Saper handleSaper={handleSaper} style={{ display: isSaperVisible ? "block" : "none" }} /> */}
        <SaperError handleSaper={handleCloseVisible} style={{ display: isVisible["SaperError"] ? "block" : "none" }} />

        <StartMenu
          style={{ display: isStartVisible ? "block" : "none" }}
          handleLogOff={props.handleLogOff}
          handleShutDown={props.handleShutDown}
          // handleCalculator={handleCalculator}
          handleCalculator={handleOpenVisible}
          // handleSaper={handleSaper}
          handleSaper={handleOpenVisible}
        />
      </div>
      <Bar handleStartMenuBtn={handleStartMenuBtn} isVisible={isVisible} handleActiveWindow={handleActiveWindow} activeWindow={activeWindow} />
    </div>
  );
}

export default Windows;
