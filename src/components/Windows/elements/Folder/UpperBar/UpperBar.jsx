import "./UpperBar.scss";
import BackIcon from "../../../../../assets/icons/back.png";
import NextIcon from "../../../../../assets/icons/next.png";
import BackBwIcon from "../../../../../assets/icons/back_bw.png";
import NextBwIcon from "../../../../../assets/icons/next_bw.png";

function UpperBar(props) {
  return (
    <div className="upper-bar">
      <button className="upper-bar__btn upper-bar__btn--back">
        <img src={BackIcon} alt="Back Button Icon" />
        <p>Back</p>
      </button>
      <button className="upper-bar__btn upper-bar__btn--next">
        <img src={NextIcon} alt="Next Button Icon" />
        <p>Next</p>
      </button>
    </div>
  );
}

export default UpperBar;
