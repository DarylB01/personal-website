import React from "react";
import vscImg from "../../imgs/skills-imgs/vscode.svg";
import gitImg from "../../imgs/skills-imgs/git.png";
import herokuImg from "../../imgs/skills-imgs/heroku.png";
import npmImg from "../../imgs/skills-imgs/npm.png";
import aiImg from "../../imgs/skills-imgs/ai.png";

const Other = props => {
  return (
    <section
      className="browser__content"
      style={props.tab !== "Other" ? { display: "none", opacity: "0" } : null}
    >
      <figure>
        <img alt="VSC img" src={vscImg} />
        <figcaption>Visual Studio Code</figcaption>
      </figure>
      <figure>
        <img alt="git" src={gitImg} />
        <figcaption>Git</figcaption>
      </figure>
      <figure>
        <img alt="heroku img" src={herokuImg} />
        <figcaption>Heroku</figcaption>
      </figure>
      <figure>
        <img alt="npm img" src={npmImg} />
        <figcaption>NPM</figcaption>
      </figure>
      <figure>
        <img alt="adobe illustrator" src={aiImg} />
        <figcaption>Adobe Illustrator</figcaption>
      </figure>
    </section>
  );
};

export default Other;
