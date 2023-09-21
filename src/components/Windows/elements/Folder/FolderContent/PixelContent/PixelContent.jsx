import "./PixelContent.scss";
import FileLink from "../../../FileLink/FileLink";

function PixelContent(props) {
  return (
    <div className="pixel" style={props.style}>
      <FileLink type="pixelFolder" alt="link to Pixel folder and folder icon" fileName="Example Pixel1" />
      <FileLink type="pixelFolder" alt="link to Pixel folder and folder icon" fileName="Example Pixel2" />
      <FileLink type="pixelFolder" alt="link to Pixel folder and folder icon" fileName="Example Pixel3" />
    </div>
  );
}

export default PixelContent;
