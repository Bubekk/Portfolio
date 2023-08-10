import "./windows.scss";
import Bar from "./elements/Bar/Bar";
import StickyNote from "./elements/StickyNote/StickyNote";
import FileLink from "./elements/FileLink/FileLink";

function Windows(props) {
  return (
    <div className="windows" style={props.style}>
      <div className="windows__screen">
        <FileLink type="pdf" alt="link to resume and pdf icon" fileName="resume.pdf" />
        <FileLink type="code" alt="link to codePortfolio and code icon" fileName="Portfolio.jsx" handleCodeEditorLink={props.handleCodeEditorLink} />
        <div className="windows__screen__sticky-notes">
          <StickyNote color="yellow" text="Remember to check Portfolio.jsx!!!" />
          <StickyNote color="blue" text="Read the resume.pdf, don't forget again!" />
          <StickyNote color="pink" text="I know.. there were no sticky notes in XP, but somehow I have to guide you, right?" />
        </div>
      </div>
      <Bar />
    </div>
  );
}

export default Windows;

//<a href="https://www.flaticon.com/free-icons/pdf" title="pdf icons">Pdf icons created by inipagistudio - Flaticon</a> A pdf icon link
//<a href="https://www.flaticon.com/free-icons/configuration" title="configuration icons">Configuration icons created by iconixar - Flaticon</a> A code icon link
