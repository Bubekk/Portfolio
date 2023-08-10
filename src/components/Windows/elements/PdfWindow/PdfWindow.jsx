import "./pdfWindow.scss";

function PdfWindow(props) {
  return (
    <div className="pdf-window">
      <nav className="pdf-window__nav">
        <p className="pdf-window__nav__filename">resume.pdf</p>
        <div className="pdf-window__nav__btns">
          <button className="pdf-window__nav__btns__btn pdf-window__nav__btns__btn--maximize">&#9633;</button>
          <button className="pdf-window__nav__btns__btn pdf-window__nav__btns__btn--close">&#935;</button>
        </div>
      </nav>
    </div>
  );
}

export default PdfWindow;
