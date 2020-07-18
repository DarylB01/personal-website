import React from "react";
import projectList from "./projectList";

const Projects = (props) => {
  return (
    <section className="projects  section" ref={props.projects}>
      <section className="projectList">
        {projectList.map((project, index) => (
          <article className="projItem flex" key={index}>
            <img
              className="projImg"
              src={project.imgSrc}
              alt={project.title}
            ></img>
            <section
              className="projects-imgFilter"
              style={{ backgroundColor: project.siteColor }}
            ></section>
            <img
              className="projLogo"
              alt=""
              src={project.logo ? project.logo : null}
              style={
                project.title === "Calgary Filipino Methodist Church"
                  ? {
                      filter: "invert(0%)",
                    }
                  : null
              }
            ></img>
            <div className="projInfo">
              <a href={project.src.demo}>
                <div className="projTitle">
                  {project.title === "Calgary Filipino Methodist Church"
                    ? "In Progress"
                    : "View Website"}
                </div>
              </a>
              <p>{project.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
