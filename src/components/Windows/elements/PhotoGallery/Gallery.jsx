import "./Gallery.scss";

function Gallery(props) {
  const galleryPhotos = [{}];
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
      <div className="gallery-window__images"></div>
      <div className="gallery-window__btn-bar"></div>
    </div>
  );
}

export default Gallery;
