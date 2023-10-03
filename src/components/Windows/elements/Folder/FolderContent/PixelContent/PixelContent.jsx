import "./PixelContent.scss";
import FileLink from "../../../FileLink/FileLink";
import LinkToContent from "../LinkToContent/LinkToContent";

function PixelContent(props) {
  return (
    <div className="pixel" style={props.style}>
      <div className="pixel__links" style={{ display: props.projects.pixel1 || props.projects.pixel2 || props.projects.pixel3 ? "none" : "flex" }}>
        <FileLink
          type="pixelFolder"
          linkto="pixel1"
          alt="link to Pixel folder and folder icon"
          fileName="Static Pixels"
          showPixel={props.showPixel}
        />
        <FileLink type="pixelFolder" linkto="pixel2" alt="link to Pixel folder and folder icon" fileName="Pixel Gifs" showPixel={props.showPixel} />
      </div>
      <div className="project__project-content">
        <LinkToContent
          style={{ display: props.projects.pixel1 || props.projects.pixel2 ? "flex" : "none", color: "black" }}
          projects={props.projects}
          handleGallery={props.handleGallery}
        />
      </div>
    </div>
  );
}

export default PixelContent;
