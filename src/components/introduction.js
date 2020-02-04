import React, { useState, useEffect } from "react";
import avatar from "../imgs/headshot.svg";
import computerBackground from "../imgs/top-background.svg";
import scrollFunction from "./scrollFunction";

const Introduction = () => {
  return (
    <section className="intro-container" id="intro-container">
      <Navbar />
      <section className="introduction">
        <div className="name">Daryl Botengan</div>
        <p className="aboutMe">Web Developer</p>
      </section>
      <section className="picBio">
        <img src={avatar} alt="avatar img" className="avatar-img"></img>
      </section>
      <img
        className="top-background"
        src={computerBackground}
        alt="background img"
      ></img>
    </section>
  );
};

const Navbar = () => {
  scrollFunction();
  return (
    <nav id="navbar">
      <div className="nav-logo">
        <a href="#intro-container" id="nav-logo">
          db
        </a>
      </div>
      <div className="nav-links">
        <a href="#projects" className="nav-link">
          Projects
          <hr />
        </a>
        <a href="#bottom" className="nav-link">
          Contact
          <hr />
        </a>
      </div>
    </nav>
  );
};

export default Introduction;
