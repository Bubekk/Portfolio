import "./resumeWindow.scss";
import cv from "../../../../assets/resume/cv.png";
import pdfCv from "/CV.pdf";

function ResumeWindow(props) {
  //handling download resume.pdf btn
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfCv;
    link.download = "SebastianKubanski_CV.pdf";
    link.target = "_blank";
    link.rel = "noreferrer";
    link.click();
    console.log(link);
  };

  //handling folder closing
  const handleClose = () => {
    props.handleResumeLink();
  };

  return (
    <div className="pdf-window" style={props.style}>
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
        <img src={cv} alt="" />
      </div>
    </div>
  );
}

export default ResumeWindow;
