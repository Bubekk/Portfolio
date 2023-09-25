import "./UpperBar.scss";
import BackIcon from "../../../../../assets/icons/back.png";
import NextIcon from "../../../../../assets/icons/next.png";
import BackBwIcon from "../../../../../assets/icons/back_bw.png";
import NextBwIcon from "../../../../../assets/icons/next_bw.png";

function UpperBar(props) {
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
      <button className="upper-bar__btn upper-bar__btn--back" onClick={handleBack}>
        <img
          //setting back btn icon color depending on if some of inner folder was opened or not
          src={
            props.projects.project1 ||
            props.projects.project2 ||
            props.projects.project3 ||
            props.pixels.pixel1 ||
            props.pixels.pixel2 ||
            props.pixels.pixel3
              ? BackIcon
              : BackBwIcon
          }
          alt="Back Button Icon"
        />
        <p>Back</p>
      </button>
      <button className="upper-bar__btn upper-bar__btn--next" onClick={handleNext}>
        <img
          //setting next btn icon color depending on if main folder window is opened or inner folder
          src={
            props.projects.project1 ||
            props.projects.project2 ||
            props.projects.project3 ||
            props.pixels.pixel1 ||
            props.pixels.pixel2 ||
            props.pixels.pixel3
              ? NextBwIcon
              : NextIcon
          }
          alt="Next Button Icon"
        />
        <p>Next</p>
      </button>
    </div>
  );
}

export default UpperBar;
