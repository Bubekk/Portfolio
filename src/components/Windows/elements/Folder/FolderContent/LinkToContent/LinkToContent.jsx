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
          <PhotoLink pixelName="blockhouse" handleGallery={props.handleGallery} type="static" id={0} />
          <PhotoLink pixelName="ecto1" handleGallery={props.handleGallery} type="static" id={1} />
          <PhotoLink pixelName="emberSwords" handleGallery={props.handleGallery} type="static" id={2} />
          <PhotoLink pixelName="farmer" handleGallery={props.handleGallery} type="static" id={3} />
          <PhotoLink pixelName="oldResume" handleGallery={props.handleGallery} type="static" id={4} />
          <PhotoLink pixelName="redSnow" handleGallery={props.handleGallery} type="static" id={5} />
          <PhotoLink pixelName="seaHouse" handleGallery={props.handleGallery} type="static" id={6} />
        </div>
      )}
      {props.projects.pixel2 && (
        <div className="linkto">
          <PhotoLink pixelName="bear" handleGallery={props.handleGallery} type="gif" id={0} />
          <PhotoLink pixelName="breakingbad" handleGallery={props.handleGallery} type="gif" id={1} />
          <PhotoLink pixelName="gameroom" handleGallery={props.handleGallery} type="gif" id={2} />
          <PhotoLink pixelName="pikachu" handleGallery={props.handleGallery} type="gif" id={3} />
          <PhotoLink pixelName="street" handleGallery={props.handleGallery} type="gif" id={4} />
          <PhotoLink pixelName="toad" handleGallery={props.handleGallery} type="gif" id={5} />
        </div>
      )}
    </div>
  );
}

export default LinkToContent;
