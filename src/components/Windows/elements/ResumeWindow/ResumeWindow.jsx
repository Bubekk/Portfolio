import "./resumeWindow.scss";
import cv from "../../../../assets/resume/cv.png";
import pdfCv from "/CV.pdf";

function ResumeWindow(props) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = { pdfCv };
    link.download = "SebastianKubanski_CV.pdf";
    link.click();
    console.log(pdfCv);
  };

  return (
    <div className="pdf-window">
      <nav className="pdf-window__nav">
        <p className="pdf-window__nav__filename">resume.png</p>
        <div className="pdf-window__nav__btns">
          <button className="pdf-window__nav__btns__btn pdf-window__nav__btns__btn--download" onClick={handleDownload}>
            &#8659;
          </button>
          <button className="pdf-window__nav__btns__btn pdf-window__nav__btns__btn--close">&#935;</button>
        </div>
      </nav>
      <div className="pdf-window__resume">
        <img src={cv} alt="" />
      </div>
    </div>
  );
}

export default ResumeWindow;
