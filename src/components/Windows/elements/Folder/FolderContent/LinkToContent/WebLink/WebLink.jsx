import "./WebLink.scss";
import ExplorerIcon from "../../../../../../../assets/icons/explorer-icon.png";

function WebLink(props) {
  return (
    <button title="Double click to open new tab with this website" className="weblink" onDoubleClick={() => window.open(`${props.url}`)}>
      <img src={ExplorerIcon} alt="Website logo Icon" />
      <p>{props.linkTitle}</p>
    </button>
  );
}

export default WebLink;
