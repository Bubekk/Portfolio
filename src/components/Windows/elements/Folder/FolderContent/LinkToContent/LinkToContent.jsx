function LinkToContent(props) {
  return (
    <div className="linkto" style={props.style}>
      {props.projects.project1 ? <p>Hi im inner project1</p> : ""}
      {props.projects.project2 ? <p>Hi im inner project2</p> : ""}
      {props.projects.project3 ? <p>Hi im inner project3</p> : ""}
      {props.projects.pixel1 ? <p>Hi im inner pixel1</p> : ""}
      {props.projects.pixel2 ? <p>Hi im inner pixel2</p> : ""}
      {props.projects.pixel3 ? <p>Hi im inner pixel3</p> : ""}
    </div>
  );
}

export default LinkToContent;
