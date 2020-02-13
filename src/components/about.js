import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const about = props => {
  return (
    <section className="about-container section" ref={props.about}>
      <div className="about__text">
        {props.activePage !== "Home" ? null : (
          <Typist avgTypingDelay={20} startDelay={1000}>
            <span> Hello, my name is Daryl Botengan.</span>
            <br />
            <br />
            <Typist.Delay ms={500} />
            <span className="body">
              I'm a self-taught full-stack web developer who specializes in the
              use of the MERN stack.
            </span>
            <Typist.Delay ms={500} />
            <br />
            <br />
            <span className="body">
              Outside of web development, I engage myself with my musical
              endeavours and endless pursuit of self-improvement.
            </span>
          </Typist>
        )}
      </div>
    </section>
  );
};

export default about;
