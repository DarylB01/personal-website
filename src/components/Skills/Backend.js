import React from "react";
import nodeImg from "../../imgs/skills-imgs/nodejs.png";
import expressImg from "../../imgs/skills-imgs/expressjs.png";
import mongoImg from "../../imgs/skills-imgs/mongodb.png";
import jwtImg from "../../imgs/skills-imgs/jwt.png";

const Backend = props => {
  return (
    <section
      className="browser__content"
      style={props.tab !== "Backend" ? { display: "none", opacity: "0" } : null}
    >
      <figure>
        <img alt="node" src={nodeImg} />
        <figcaption>Node JS</figcaption>
      </figure>
      <figure>
        <img alt="express" src={expressImg} />
        <figcaption>Express JS</figcaption>
      </figure>
      <figure>
        <img alt="JWT" src={mongoImg} />
        <figcaption>MongoDB</figcaption>
      </figure>
      <figure>
        <img alt="node" src={jwtImg} />
        <figcaption>JWT</figcaption>
      </figure>
    </section>
  );
};

export default Backend;
