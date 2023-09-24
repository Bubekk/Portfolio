import "./ProjectContent.scss";
import FileLink from "../../../FileLink/FileLink";
import LinkToContent from "../LinkToContent/LinkToContent";
import { useState } from "react";

function ProjectsContent(props) {
  const [projects, setProjects] = useState({
    project1: false,
    project2: false,
    project3: false,
  });

  const showProject = (projectNumber) => {
    setProjects((prevProjects) => ({
      ...prevProjects,
      [`project${projectNumber}`]: true,
    }));
    // console.log(projects.project1);
    // console.log(projects.project2);
    // console.log(projects.project3);
  };

  return (
    <div className="project" style={props.style}>
      <div className="project__links" style={{ display: projects.project1 || projects.project2 || projects.project3 ? "none" : "flex" }}>
        <FileLink
          type="projectFolder"
          linkto="project1"
          alt="link to project folder and folder icon"
          fileName="Example Project1"
          showProject={showProject}
        />
        <FileLink
          type="projectFolder"
          linkto="project2"
          alt="link to project folder and folder icon"
          fileName="Example Project2"
          showProject={showProject}
        />
        <FileLink
          type="projectFolder"
          linkto="project3"
          alt="link to project folder and folder icon"
          fileName="Example Project3"
          showProject={showProject}
        />
      </div>
      <div className="project__project-content">
        <LinkToContent
          style={{ display: projects.project1 || projects.project2 || projects.project3 ? "flex" : "none", color: "black" }}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default ProjectsContent;
