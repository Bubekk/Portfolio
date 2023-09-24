function LinkToContent(props) {
  return (
    <div className="linkto" style={props.style}>
      {props.projects.project1 ? <p>Hi im inner project1</p> : ""}
      {props.projects.project2 ? <p>Hi im inner project2</p> : ""}
      {props.projects.project3 ? <p>Hi im inner project3</p> : ""}
    </div>
  );
}

export default LinkToContent;
