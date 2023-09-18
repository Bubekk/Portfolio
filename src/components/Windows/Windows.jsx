import "./windows.scss";
import Bar from "./elements/Bar/Bar";
import StickyNote from "./elements/StickyNote/StickyNote";
import FileLink from "./elements/FileLink/FileLink";
import ResumeWindow from "./elements/ResumeWindow/ResumeWindow";
import Calculator from "./elements/Calculator/Calculator";
import Saper from "./elements/Saper/Saper";
import SaperError from "./elements/Saper/SaperError/SaperError";
import Folder from "./elements/Folder/Folder";
import StartMenu from "./elements/StartMenu/StartMenu";
import { useState } from "react";

function Windows(props) {
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  const [isCalcVisible, setIsCalcVisible] = useState(false);
  // const [isSaperVisible, setIsSaperVisible] = useState(false);
  const [isSaperErrorVisible, setIsSaperErrorVisible] = useState(false);
  const [isFolderProjectVisible, setIsFolderProjectVisible] = useState(false);
  const [isFolderPixelVisible, setIsFolderPixelVisible] = useState(false);
  const [isStartVisible, setIsStartVisible] = useState(false);

  const handleCalculator = () => {
    setIsCalcVisible(!isCalcVisible);
  };

  const handleSaper = () => {
    // Changing actal Minesweeper with win error window
    // setIsSaperVisible(!isSaperVisible);
    setIsSaperErrorVisible(!isSaperErrorVisible);
  };

  const handleResumeLink = () => {
    setIsResumeVisible(!isResumeVisible);
  };

  const handleStartMenuBtn = () => {
    setIsStartVisible(!isStartVisible);
  };

  const handleFolderProjects = () => {
    setIsFolderProjectVisible(!isFolderProjectVisible);
  };

  const handleFolderPixel = () => {
    setIsFolderPixelVisible(!isFolderPixelVisible);
  };

  return (
    <div className="windows" style={props.style}>
      <div className="windows__screen">
        <FileLink type="pdf" alt="link to resume and pdf icon" fileName="resume.pdf" handleResumeLink={handleResumeLink} />
        <FileLink type="code" alt="link to resume and code icon" fileName="Portfolio.jsx" handleCodeEditorLink={props.handleCodeEditorLink} />
        <FileLink type="folderProjects" alt="link to folder and folder icon" fileName="Projects" handleFolder={handleFolderProjects} />
        <FileLink type="folderPixels" alt="link to folder and folder icon" fileName="Pixelart" handleFolder={handleFolderPixel} />
        <div className="windows__screen__sticky-notes">
          <StickyNote color="yellow" text="Remember to check Portfolio.jsx!!!" />
          <StickyNote color="blue" text="Read the resume.pdf, don't forget again!" />
          <StickyNote color="pink" text="I know.. there were no sticky notes in XP, but somehow I have to guide you, right?" />
          <StickyNote color="red" text="Remember to click twice on icons. it's XP after all ;) " />
        </div>
        <Folder type="Projects" handleFolder={handleFolderProjects} style={{ display: isFolderProjectVisible ? "block" : "none" }} />
        <Folder
          type="PixelArt"
          handleFolder={handleFolderPixel}
          style={{ display: isFolderPixelVisible ? "block" : "none", top: "100px", left: "480px" }}
        />
        <ResumeWindow handleResumeLink={handleResumeLink} style={{ display: isResumeVisible ? "block" : "none" }} />
        <Calculator handleCalculator={handleCalculator} style={{ display: isCalcVisible ? "block" : "none" }} />
        {/* Minesweeper/Saper is not ready yet! */}
        {/* <Saper handleSaper={handleSaper} style={{ display: isSaperVisible ? "block" : "none" }} /> */}
        <SaperError handleSaper={handleSaper} style={{ display: isSaperErrorVisible ? "block" : "none" }} />
        <StartMenu
          style={{ display: isStartVisible ? "block" : "none" }}
          handleLogOff={props.handleLogOff}
          handleShutDown={props.handleShutDown}
          handleCalculator={handleCalculator}
          handleSaper={handleSaper}
        />
      </div>
      <Bar handleStartMenuBtn={handleStartMenuBtn} />
    </div>
  );
}

export default Windows;
