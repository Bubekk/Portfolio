import "./LinkToContent.scss";
import GitLink from "./GitLink/GitLink";
import WebLink from "./WebLink/WebLink";
import PhotoLink from "./PhotoLink/PhotoLink";

function LinkToContent(props) {
  return (
    <div className="linkto" style={props.style}>
      {props.projects.project1 && (
        <div className="linkto__links">
          <WebLink linkTitle="Theravada - ThreeJS Training" url="https://theravadainfopage.netlify.app" />
          <GitLink linkTitle="Theravada - Github Link" url="https://github.com/Bubekk/Theravada-Info-Page-with-Three-JS" />
        </div>
      )}
      {props.projects.project2 && (
        <div className="linkto__links">
          <WebLink linkTitle="RinaNails - LandingPage" url="https://rinanails.pl" />
          <GitLink linkTitle="RinaNails - Github Link" url="https://github.com/Bubekk/Rina-Nails-Landing-Page" />
        </div>
      )}
      {props.projects.pixel1 && (
        <div className="linkto">
          <PhotoLink pixelName="Blockhouse" handleGallery={props.handleGallery} />
          <PhotoLink pixelName="Ecto1" handleGallery={props.handleGallery} />
          <PhotoLink pixelName="Farmer" handleGallery={props.handleGallery} />
          <PhotoLink pixelName="RedSnow" handleGallery={props.handleGallery} />
          <PhotoLink pixelName="SeaHouse" handleGallery={props.handleGallery} />
          <PhotoLink pixelName="EmberSwords" handleGallery={props.handleGallery} />
          <PhotoLink pixelName="OldResume" handleGallery={props.handleGallery} />
        </div>
      )}
      {props.projects.pixel2 && <p>Hi im inner pixel2</p>}
    </div>
  );
}

export default LinkToContent;
