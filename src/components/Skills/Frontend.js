import React from "react";
import htmlImg from "../../imgs/skills-imgs/html5.png";
import cssImg from "../../imgs/skills-imgs/css-3.png";
import jsImg from "../../imgs/skills-imgs/javascript.png";
import reactImg from "../../imgs/skills-imgs/react.png";
import bootstrapImg from "../../imgs/skills-imgs/bootstrap.png";
import sassImg from "../../imgs/skills-imgs/sass.png";

const Frontend = props => {
  return (
    <section
      className="browser__content"
      style={
        props.tab !== "Frontend" ? { display: "none", opacity: "0" } : null
      }
    >
      <figure>
        <img alt="html" src={htmlImg} />
        <figcaption>HTML5</figcaption>
      </figure>
      <figure>
        <img alt="css" src={cssImg} />
        <figcaption>CSS3</figcaption>
      </figure>
      <figure>
        <img alt="js" className="javascript" src={jsImg} />
        <figcaption>Javascript</figcaption>
      </figure>
      <figure>
        <img alt="react" src={reactImg} />
        <figcaption>React</figcaption>
      </figure>
      <figure>
        <img alt="bootstrap" src={bootstrapImg} />
        <figcaption>Bootstrap</figcaption>
      </figure>
      <figure>
        <img alt="bootstrap" src={sassImg} />
        <figcaption>SASS</figcaption>
      </figure>
    </section>
  );
};

export default Frontend;
