import "./PhotoLink.scss";
import PixelOne from "../../../../../../../assets/pixelsPhoto/PixelOne.png";

function PhotoLink(props) {
  return (
    <button title="Double click to open photo gallery" className="photo-link" onDoubleClick={props.handleGallery}>
      <img className="photo-link__icon" src={PixelOne} alt="pixel project photo" />
      <p className="photo-link__file-name">{props.photoTitle}</p>
    </button>
  );
}

export default PhotoLink;
