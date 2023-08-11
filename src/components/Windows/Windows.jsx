import "./windows.scss";
import Bar from "./elements/Bar/Bar";
import StickyNote from "./elements/StickyNote/StickyNote";
import FileLink from "./elements/FileLink/FileLink";
import ResumeWindow from "./elements/ResumeWindow/ResumeWindow";
import StartMenu from "./elements/StartMenu/StartMenu";
import { useState } from "react";

function Windows(props) {
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  const handleResumeLink = () => {
    setIsResumeVisible(!isResumeVisible);
    console.log(isResumeVisible);
  };
  return (
    <div className="windows" style={props.style}>
      <div className="windows__screen">
        <FileLink type="pdf" alt="link to resume and pdf icon" fileName="resume.pdf" handleResumeLink={handleResumeLink} />
        <FileLink type="code" alt="link to codePortfolio and code icon" fileName="Portfolio.jsx" handleCodeEditorLink={props.handleCodeEditorLink} />
        <div className="windows__screen__sticky-notes">
          <StickyNote color="yellow" text="Remember to check Portfolio.jsx!!!" />
          <StickyNote color="blue" text="Read the resume.pdf, don't forget again!" />
          <StickyNote color="pink" text="I know.. there were no sticky notes in XP, but somehow I have to guide you, right?" />
          <StickyNote color="red" text="Remember to click twice on icons. it's XP after all ;) " />
        </div>
        <ResumeWindow handleResumeLink={handleResumeLink} style={{ display: isResumeVisible ? "block" : "none" }} />
        <StartMenu />
      </div>
      <Bar />
    </div>
  );
}

export default Windows;
