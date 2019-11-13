import React from "react";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      imgSrc: "https://img.icons8.com/color/96/000000/html-5.png"
    },
    { name: "CSS3", imgSrc: "https://img.icons8.com/color/96/000000/css3.png" },
    {
      name: "SASS",
      imgSrc: "https://img.icons8.com/windows/96/000000/sass.png"
    },
    {
      name: "Javascript",
      imgSrc: "https://img.icons8.com/color/96/000000/javascript.png"
    },
    {
      name: "Bootstrap",
      imgSrc: "https://img.icons8.com/color/96/000000/bootstrap.png"
    },
    {
      name: "React",
      imgSrc: "https://img.icons8.com/color/96/000000/react-native.png"
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
