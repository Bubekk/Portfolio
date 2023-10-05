import "./GitLink.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../../../../contexts/ImageContext";

function GitLink(props) {
  const { icons } = useContext(ImageContext);

  return (
    <button title="Double click to open new tab with git repo of this website" className="gitlink" onDoubleClick={() => window.open(`${props.url}`)}>
      <img src={icons["gitIcon"]} alt="github Icon" />
      <p>{props.linkTitle}</p>
    </button>
  );
}

export default GitLink;
