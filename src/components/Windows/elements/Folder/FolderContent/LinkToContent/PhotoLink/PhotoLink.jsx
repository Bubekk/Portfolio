import "./PhotoLink.scss";
import { ImageContext } from "../../../../../../../contexts/ImageContext";
import { useContext } from "react";

function PhotoLink(props) {
  const { pixelPhotos } = useContext(ImageContext);

  const handleGallery = (arg, id) => {
    props.handleGallery(arg, id);
  };

  return (
    <button title="Double click to open photo gallery" className="photo-link" onDoubleClick={() => handleGallery(props.type, props.id)}>
      <img className="photo-link__icon" src={pixelPhotos[props.pixelName]} alt="pixel project photo" />
      <p className="photo-link__file-name">{props.pixelName}.png</p>
    </button>
  );
}

export default PhotoLink;
