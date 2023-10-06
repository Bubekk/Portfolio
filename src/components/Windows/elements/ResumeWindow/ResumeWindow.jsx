import "./resumeWindow.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../contexts/ImageContext";
import pdfCv from "/CV.pdf";

function ResumeWindow(props) {
  const { resume } = useContext(ImageContext);

  //handling download resume.pdf btn
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfCv;
    link.download = "SebastianKubanski_CV.pdf";
    link.target = "_blank";
    link.rel = "noreferrer";
    link.click();
  };

  //handling folder closing
  const handleClose = () => {
    props.handleResumeLink("isResumeVisible");
  };

  return (
    <div
      className="pdf-window"
      style={props.style}
      onClick={() => {
        props.handleActiveWindow(props.type);
      }}
    >
      <nav className="pdf-window__nav">
        <p className="pdf-window__nav__filename">resume.pdf</p>
        <div className="pdf-window__nav__btns">
          <button className="pdf-window__nav__btns__btn pdf-window__nav__btns__btn--download" onClick={handleDownload}>
            &#8659;
          </button>
          <button className="pdf-window__nav__btns__btn pdf-window__nav__btns__btn--close" onClick={handleClose}>
            &#935;
          </button>
        </div>
      </nav>
      <div className="pdf-window__resume">
        <img src={resume["resume"]} alt="" />
      </div>
    </div>
  );
}

export default ResumeWindow;
