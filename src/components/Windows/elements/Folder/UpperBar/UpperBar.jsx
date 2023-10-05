import "./UpperBar.scss";
import { useContext } from "react";
import { ImageContext } from "../../../../../contexts/ImageContext";

function UpperBar(props) {
  const { btnsIcon } = useContext(ImageContext);

  //handling nav back btn
  const handleBack = () => {
    props.backInFolder();
  };

  //handling nav forward/next btn
  const handleNext = () => {
    if (props.lastProject) {
      props.backInLast(props.lastProject);
    } else if (props.lastPixel) {
      props.backInLastPixel(props.lastPixel);
    }
  };

  return (
    <div className="upper-bar">
      <button className="upper-bar__btn upper-bar__btn back" onClick={handleBack}>
        <img
          //setting back btn icon color depending on if some of inner folder was opened or not
          className="icon icon--back"
          src={
            props.projects.project1 || props.projects.project2 || props.pixels.pixel1 || props.pixels.pixel2 || props.pixels.pixel3
              ? btnsIcon["backBtn"]
              : btnsIcon["backBwBtn"]
          }
          alt="Back Button Icon"
        />
        <p>Back</p>
      </button>
      <button className="upper-bar__btn upper-bar__btn next" onClick={handleNext}>
        <img
          //setting next btn icon color depending on if main folder window is opened or inner folder
          className="icon icon--next"
          src={
            props.projects.project1 || props.projects.project2 || props.pixels.pixel1 || props.pixels.pixel2 || props.pixels.pixel3
              ? btnsIcon["nextBwIcon"]
              : btnsIcon["nextBtn"]
          }
          alt="Next Button Icon"
        />
      </button>
    </div>
  );
}

export default UpperBar;
