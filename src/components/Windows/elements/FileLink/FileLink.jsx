import "./fileLink.scss";
import PdfIcon from "../../../../assets/icons/pdf-icon.png";
import CodeIcon from "../../../../assets/icons/code-icon.png";

function FileLink(props) {
  const iconSrc = props.type === "pdf" ? PdfIcon : CodeIcon;
  const handleBtn = (e) => {
    props.handleCodeEditorLink(e);
  };
  return (
    <button className="file-link" onDoubleClick={handleBtn}>
      <img className={`file-link__icon file-link__icon--${props.type}`} src={iconSrc} alt={props.alt} />
      <p className="file-link__file-name">{props.fileName}</p>
    </button>
  );
}

export default FileLink;

//<a href="https://www.flaticon.com/free-icons/pdf" title="pdf icons">Pdf icons created by inipagistudio - Flaticon</a> A pdf icon link
//<a href="https://www.flaticon.com/free-icons/configuration" title="configuration icons">Configuration icons created by iconixar - Flaticon</a> A code icon link
