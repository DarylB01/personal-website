import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

import Monitor from "./Monitor";

const About = props => {
  return (
    <section className="about-container section" ref={props.about}>
      <Monitor />
      <div className="about__text">
        <Typist avgTypingDelay={5} startDelay={2000}>
          <span> Hello, my name is Daryl Botengan.</span>
          <br />
          <br />
          <Typist.Delay ms={300} />
          <span className="body">
            I'm a freelance Web Developer that specializes in the use of the
            MERN stack.
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

export default About;
