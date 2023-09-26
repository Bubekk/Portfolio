import "./GitLink.scss";
import GitIcon from "../../../../../../../assets/icons/git-icon.png";

function GitLink(props) {
  return (
    <button title="Double click to open new tab with git repo of this website" className="gitlink" onDoubleClick={() => window.open(`${props.url}`)}>
      <img src={GitIcon} alt="github Icon" />
      <p>{props.linkTitle}</p>
    </button>
  );
}

export default GitLink;
