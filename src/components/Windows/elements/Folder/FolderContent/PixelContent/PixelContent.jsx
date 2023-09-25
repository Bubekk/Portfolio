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
          fileName="Example Pixel1"
          showPixel={props.showPixel}
        />
        <FileLink
          type="pixelFolder"
          linkto="pixel2"
          alt="link to Pixel folder and folder icon"
          fileName="Example Pixel2"
          showPixel={props.showPixel}
        />
        <FileLink
          type="pixelFolder"
          linkto="pixel3"
          alt="link to Pixel folder and folder icon"
          fileName="Example Pixel3"
          showPixel={props.showPixel}
        />
      </div>
      <div className="project__project-content">
        <LinkToContent
          style={{ display: props.projects.pixel1 || props.projects.pixel2 || props.projects.pixel3 ? "flex" : "none", color: "black" }}
          projects={props.projects}
        />
      </div>
    </div>
  );
}

export default PixelContent;
