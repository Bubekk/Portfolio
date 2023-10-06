import "./Gallery.scss";
import { useContext, useState, useEffect } from "react";
import Carousel from "./Carousel";
import { ImageContext } from "../../../../contexts/ImageContext";

function Gallery(props) {
  const { pixelPhotos } = useContext(ImageContext);
  const { pixelGifs } = useContext(ImageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(props.pixelId);
  }, [props.pixelId]);

  //setting photos to object array, just for mapping in gallery
  const slides = [
    {
      imageSrc: pixelPhotos["blockhouse"],
      caption: "Blockhouse Slaughter",
    },
    {
      imageSrc: pixelPhotos["ecto1"],
      caption: "Ghost Busters Ecto-1",
    },
    {
      imageSrc: pixelPhotos["emberSwords"],
      caption: "EmberSwords poster for fantasy game tournament",
    },
    {
      imageSrc: pixelPhotos["farmer"],
      caption: "Character design",
    },
    {
      imageSrc: pixelPhotos["oldResume"],
      caption: "My own old resume which is 2 yrs old",
    },
    {
      imageSrc: pixelPhotos["redSnow"],
      caption: "Idea of movie scene in pixelart",
    },
    {
      imageSrc: pixelPhotos["seaHouse"],
      caption: "Bioshock/Cthulhu inspired scene",
    },
  ];

  const gifs = [
    {
      imageSrc: pixelGifs["bear"],
      caption: "Welcome screen for students game project",
    },
    {
      imageSrc: pixelGifs["breakingBad"],
      caption: "Fiverr pixel order",
    },
    {
      imageSrc: pixelGifs["gameRoom"],
      caption: "Twitch screen for streamer",
    },
    {
      imageSrc: pixelGifs["pikachu"],
      caption: "Twitch screen for streamer",
    },
    {
      imageSrc: pixelGifs["street"],
      caption: "Twitch screen for streamer",
    },
    {
      imageSrc: pixelGifs["toad"],
      caption: "Community screen for twitch streamer",
    },
  ];

  //handling carousel back btn with recognizing in which gallery we are
  const goToPrevSlide = () => {
    if (props.whichPixel === " static") {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? gifs.length - 1 : prevIndex - 1));
    }
  };

  //handling carousel next btn with recognizing in which gallery we are
  const goToNextSlide = () => {
    if (props.whichPixel === "static") {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === gifs.length - 1 ? 0 : prevIndex + 1));
    }
  };

  //handling folder closing
  const handleClose = () => {
    props.handleGallery("isGalleryVisible");
    setCurrentIndex(0);
  };

  return (
    <div
      className="gallery-window"
      style={props.style}
      onClick={() => {
        props.handleActiveWindow(props.type);
      }}
    >
      <nav className="gallery-window__nav">
        <p className="gallery-window__nav__filename">Gallery</p>
        <div className="gallery-window__nav__btns">
          <button className="gallery-window__nav__btns__btn gallery-window__nav__btns__btn--close" onClick={handleClose}>
            &#935;
          </button>
        </div>
      </nav>
      <div className="gallery-window__images">
        <Carousel slides={props.whichPixel === "static" ? slides : gifs} currentIndex={currentIndex} />
      </div>
      <div className="gallery-window__btn-bar">
        <button onClick={goToPrevSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
}

export default Gallery;
