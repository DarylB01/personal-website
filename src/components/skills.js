import React from "react";
import htmlImg from "../imgs/skills-imgs/html5.png";
import cssImg from "../imgs/skills-imgs/css-3.png";
import jsImg from "../imgs/skills-imgs/javascript.png";
import reactImg from "../imgs/skills-imgs/react.png";
import bootstrapImg from "../imgs/skills-imgs/bootstrap.png";
import sassImg from "../imgs/skills-imgs/sass.png";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      imgSrc: htmlImg
    },
    { name: "CSS3", imgSrc: cssImg },
    {
      name: "SASS",
      imgSrc: sassImg
    },
    {
      name: "Javascript",
      imgSrc: jsImg
    },
    {
      name: "Bootstrap",
      imgSrc: bootstrapImg
    },
    {
      name: "React",
      imgSrc: reactImg
    }
  ];
  return (
    <section className="skills">
      <div className="skills-title">Dev Tools</div>
      <ul className="skills-list flex">
        {skills.map((skill, index) => (
          <li className="flex f-col" key={index}>
            <img src={skill.imgSrc} alt="language img" />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
