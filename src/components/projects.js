import React from "react";
import projectList from "./projectList";

const Projects = props => {
  return (
    <section className="projects  section" ref={props.projects}>
      <section className="projects-bg-img"></section>
      <section className="projectList">
        {projectList.map((project, index) => (
          <article className="projItem flex" key={index}>
            <img
              className="projImg"
              src={project.imgSrc}
              alt={project.title}
            ></img>

            <a href={project.src.demo}>
              <div className="projInfo">
                <div className="projTitle">{project.title}</div>
                <p>{project.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
