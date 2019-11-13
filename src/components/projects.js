import React from "react";
import projectList from "./projectList";
import goToImg from "../imgs/goto.png";
import gitHubImg from "../imgs/github.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <section className="projects-bg-img"></section>
      <div className="projectsTitle">Projects</div>

      <section className="projectList">
        {projectList.map((project, index) => (
          <article className="projItem flex" key={index}>
            <img
              className="projImg"
              src={project.imgSrc}
              alt={project.title}
            ></img>
            <div className="projInfo flex f-col">
              <div className="projTitle">{project.title}</div>
              <hr></hr>
              <p>{project.desc}</p>
              <ul className="techList">
                {project.techList.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="srcList flex">
                <a
                  href={project.src.demo}
                  className="flex between round-radius"
                >
                  <img
                    className="proj-button-img"
                    src={goToImg}
                    alt="go to img"
                  />
                  Demo
                </a>
                <a
                  href={project.src.github}
                  className="flex between round-radius"
                >
                  <img
                    className="proj-button-img"
                    src={gitHubImg}
                    alt="github img"
                  />
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Projects;
