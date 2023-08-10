import "./fileLink.scss";
import PdfIcon from "../../../../assets/icons/pdf-icon.png";
import CodeIcon from "../../../../assets/icons/code-icon.png";

function FileLink(props) {
  const iconSrc = props.type === "pdf" ? PdfIcon : CodeIcon;
  const handleBtn = (e) => {
    props.handleCodeEditorLink(e);
  };
  return (
    <button className="file-link" onClick={handleBtn}>
      <img className={`file-link__icon file-link__icon--${props.type}`} src={iconSrc} alt={props.alt} />
      <p className="file-link__file-name">{props.fileName}</p>
    </button>
  );
}

export default FileLink;
