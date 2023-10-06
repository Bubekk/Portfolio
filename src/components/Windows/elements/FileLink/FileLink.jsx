import "./fileLink.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../contexts/ImageContext";

function FileLink(props) {
  const { icons } = useContext(ImageContext);

  //Dynamic seting of folder icon by prop type
  const iconSrc =
    props.type === "pdf"
      ? icons["pdfIcon"]
      : props.type === "code"
      ? icons["codeIcon"]
      : props.type === "folder"
      ? icons["folderIcon"]
      : icons["projectIcon"];

  //handling icon double click that opens proper folder selecting it by prop type. When any of type is ok it goes to another function
  const handleBtn = () => {
    const link =
      props.type === "pdf"
        ? props.handleResumeLink("Resume")
        : props.type === "code"
        ? props.handleCodeEditorLink()
        : props.type === "folder" && props.fileName === "Projects"
        ? props.handleFolder("Projects")
        : props.type === "folder" && props.fileName === "Pixelart"
        ? props.handleFolder("Pixels")
        : handleLink();
  };

  //handling proper folder content showing depends on prop linkto
  const handleLink = () => {
    if (props.linkto === "project1") {
      props.showProject(1);
    } else if (props.linkto === "project2") {
      props.showProject(2);
    } else if (props.linkto === "pixel1") {
      props.showPixel(1);
    } else if (props.linkto === "pixel2") {
      props.showPixel(2);
    }
  };

  return (
    <button
      className="file-link"
      onDoubleClick={handleBtn}
      title={`${
        props.type === "pdf"
          ? "File type: dummy pdf, that is just my resume and you can download it"
          : props.type === "code"
          ? "File type: That is dummy IDE that shows my resume in different way, because I want to make something fun here"
          : "File type: Folder of anything what is inside... this folder.. i guess. "
      }`}
    >
      <img className={`file-link__icon file-link__icon--${props.type}`} src={iconSrc} alt={props.alt} />
      <p className={`file-link__file-name file-link__file-name--${props.type === "projectFolder" || props.type === "pixelFolder" ? "black" : ""}`}>
        {props.fileName}
      </p>
    </button>
  );
}

export default FileLink;

//<a href="https://www.flaticon.com/free-icons/pdf" title="pdf icons">Pdf icons created by inipagistudio - Flaticon</a> A pdf icon link
//<a href="https://www.flaticon.com/free-icons/configuration" title="configuration icons">Configuration icons created by iconixar - Flaticon</a> A code icon link
