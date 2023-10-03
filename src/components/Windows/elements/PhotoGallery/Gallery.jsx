import "./Gallery.scss";
import { useContext, useState } from "react";
import Carousel from "./Carousel";
import { ImageContext } from "../../../../contexts/ImageContext";
// import PixelOne from "../../../../assets/pixelsPhoto/PixelOne.png";
// import PixelTwo from "../../../../assets/pixelsPhoto/PixelTwo.png";

function Gallery(props) {
  const { pixelPhotos } = useContext(ImageContext);

  const slides = [
    {
      imageSrc: pixelPhotos["Blockhouse"],
      caption: "Blockhouse Slaughter",
    },
    {
      imageSrc: pixelPhotos["Ecto1"],
      caption: "Ghost Busters Ecto-1",
    },
    {
      imageSrc: pixelPhotos["EmberSwords"],
      caption: "EmberSwords poster for fantasy game tournament",
    },
    {
      imageSrc: pixelPhotos["Farmer"],
      caption: "Character design",
    },
    {
      imageSrc: pixelPhotos["OldResume"],
      caption: "My own old resume which is 2 yrs old",
    },
    {
      imageSrc: pixelPhotos["RedSnow"],
      caption: "Idea of movie scene in pixelart",
    },
    {
      imageSrc: pixelPhotos["SeaHouse"],
      caption: "Bioshock/Cthulhu inspired scene",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  //handling folder closing
  const handleClose = () => {
    props.handleGallery();
  };

  return (
    <div className="gallery-window" style={props.style}>
      <nav className="gallery-window__nav">
        <p className="gallery-window__nav__filename">Gallery</p>
        <div className="gallery-window__nav__btns">
          <button className="gallery-window__nav__btns__btn gallery-window__nav__btns__btn--close" onClick={handleClose}>
            &#935;
          </button>
        </div>
      </nav>
      <div className="gallery-window__images">
        <Carousel slides={slides} currentIndex={currentIndex} />
      </div>
      <div className="gallery-window__btn-bar">
        <button onClick={goToPrevSlide}>Poprzedni</button>
        <button onClick={goToNextSlide}>Następny</button>
      </div>
    </div>
  );
}

export default Gallery;
