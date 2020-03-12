import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const about = props => {
  return (
    <section className="about-container section" ref={props.about}>
      <section className="about__monitor">
        <div className="monitor__screen area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="monitor__bottom">
          <div className="monitor__button"></div>
        </div>
      </section>
      <div className="monitor__stand"></div>
      <div className="monitor__base"></div>
      <section className="about__editor">
        <div className="editor__taskbar">
          <div className="taskbar__buttons">
            <div
              className="buttons__button"
              style={{ backgroundColor: "red" }}
            ></div>
            <div
              className="buttons__button"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <div
              className="buttons__button"
              style={{ backgroundColor: "green" }}
            ></div>
          </div>
          <img className="taskbar__enlarge"></img>
        </div>
      </section>
      <div className="about__text">
        <Typist avgTypingDelay={5} startDelay={2000}>
          <span> Hello, my name is Daryl Botengan.</span>
          <br />
          <br />
          <Typist.Delay ms={300} />
          <span className="body">
            I'm a freelance Web Developer that specializes in the use
            of the MERN stack.
          </span>
          <Typist.Delay ms={300} />
          <br />
          <br />
          <span className="body">
            Outside of web development, I actively participate in musical
            endeavors and an endless pursuit for self-improvement.
          </span>
        </Typist>
      </div>
    </section>
  );
};

export default about;
