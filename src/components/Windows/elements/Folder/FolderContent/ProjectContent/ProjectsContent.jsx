import "./ProjectContent.scss";
import FileLink from "../../../FileLink/FileLink";

function ProjectsContent(props) {
  return (
    <div className="project" style={props.style}>
      <FileLink type="projectFolder" alt="link to project folder and folder icon" fileName="Example Project1" />
      <FileLink type="projectFolder" alt="link to project folder and folder icon" fileName="Example Project2" />
      <FileLink type="projectFolder" alt="link to project folder and folder icon" fileName="Example Project3" />
    </div>
  );
}

export default ProjectsContent;
