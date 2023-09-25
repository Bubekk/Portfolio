import "./UpperBar.scss";
import BackIcon from "../../../../../assets/icons/back.png";
import NextIcon from "../../../../../assets/icons/next.png";
import BackBwIcon from "../../../../../assets/icons/back_bw.png";
import NextBwIcon from "../../../../../assets/icons/next_bw.png";

function UpperBar(props) {
  const handleBack = () => {
    props.backInFolder();
  };

  const handleNext = () => {
    props.backInLast(props.lastProject);
  };

  return (
    <div className="upper-bar">
      <button className="upper-bar__btn upper-bar__btn--back" onClick={handleBack}>
        <img src={props.projects.project1 || props.projects.project2 || props.projects.project3 ? BackIcon : BackBwIcon} alt="Back Button Icon" />
        <p>Back</p>
      </button>
      <button className="upper-bar__btn upper-bar__btn--next" onClick={handleNext}>
        <img src={props.projects.project1 || props.projects.project2 || props.projects.project3 ? NextBwIcon : NextIcon} alt="Next Button Icon" />
        <p>Next</p>
      </button>
    </div>
  );
}

export default UpperBar;
