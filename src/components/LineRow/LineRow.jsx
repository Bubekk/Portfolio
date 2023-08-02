import "./styles/lineRow.scss";
import MainFunction from "../Main/MainFunction";

function LineRow(props) {
  const renderContent = () => {
    // if (props.content === "first") {
    //   return <span>import "./portfolio.css"</span>;
    // } else if (props.content === "mainfunction") {
    //   return <MainFunction />;
    // }
    switch (props.content) {
      case "import":
        return <span>import "./portfolio.css"</span>;
      case "mainfunction":
        return <MainFunction />;
      default:
        return "that's default line";
    }
  };

  return (
    <div className="linerow">
      <div className="linerow__number">
        <span>{props.number}</span>
      </div>
      <div className="linerow__arrow">&#8744;</div>
      <div className="linerow__content">{renderContent()}</div>
    </div>
  );
}

export default LineRow;
