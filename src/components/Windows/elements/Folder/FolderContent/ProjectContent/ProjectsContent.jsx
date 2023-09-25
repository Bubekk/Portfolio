import "./ProjectContent.scss";
import FileLink from "../../../FileLink/FileLink";
import LinkToContent from "../LinkToContent/LinkToContent";
import { useState } from "react";

function ProjectsContent(props) {
  return (
    <div className="project" style={props.style}>
      <div
        className="project__links"
        style={{ display: props.projects.project1 || props.projects.project2 || props.projects.project3 ? "none" : "flex" }}
      >
        <FileLink
          type="projectFolder"
          linkto="project1"
          alt="link to project folder and folder icon"
          fileName="Example Project1"
          showProject={props.showProject}
        />
        <FileLink
          type="projectFolder"
          linkto="project2"
          alt="link to project folder and folder icon"
          fileName="Example Project2"
          showProject={props.showProject}
        />
        <FileLink
          type="projectFolder"
          linkto="project3"
          alt="link to project folder and folder icon"
          fileName="Example Project3"
          showProject={props.showProject}
        />
      </div>
      <div className="project__project-content">
        <LinkToContent
          style={{ display: props.projects.project1 || props.projects.project2 || props.projects.project3 ? "flex" : "none", color: "black" }}
          projects={props.projects}
        />
      </div>
    </div>
  );
}

export default ProjectsContent;
