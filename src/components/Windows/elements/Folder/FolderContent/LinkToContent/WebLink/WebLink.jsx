import "./WebLink.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../../../../contexts/ImageContext";

function WebLink(props) {
  const { icons } = useContext(ImageContext);

  return (
    <button title="Double click to open new tab with this website" className="weblink" onDoubleClick={() => window.open(`${props.url}`)}>
      <img src={icons["explorerIcon"]} alt="Website logo Icon" />
      <p>{props.linkTitle}</p>
    </button>
  );
}

export default WebLink;
