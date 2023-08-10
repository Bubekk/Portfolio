import "./windows.scss";
import Bar from "./elements/Bar/Bar";
import StickyNote from "./elements/StickyNote/StickyNote";

function Windows(props) {
  return (
    <div className="windows">
      <div className="windows__sticky-notes">
        <StickyNote text="Remember to check Portfolio.jsx!!!" />
        <StickyNote text="Read the resume.pdf, don't forget again!" />
      </div>
      <Bar />
    </div>
  );
}

export default Windows;
