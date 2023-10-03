import Slide from "./Slide";

const Carousel = ({ slides, currentIndex }) => {
  return (
    <div className="carousel">
      <div className="carousel__slides-container">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentIndex ? "slide-active" : "slide-inactive"}>
            <Slide imageSrc={slide.imageSrc} caption={slide.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
