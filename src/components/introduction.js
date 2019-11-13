import React from "react";
import avatar from "../imgs/google-avatar.png";
import computerBackground from "../imgs/top-background.svg";
import logo from "../imgs/logo.png";

const Introduction = () => {
  return (
    <section className="intro-container">
      <nav className="flex">
        {/* <img src={logo} href="" className="nav-logo" alt="logo"></img> */}
        <div className="nav-links">
          <a href="#projects">
            Projects
            <hr />
          </a>
          <a href="#bottom">
            Contact
            <hr />
          </a>
        </div>
      </nav>
      <section className="introduction">
        <div className="name">Daryl Botengan</div>
        <p className="aboutMe">Front-End Web Developer</p>
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

export default Introduction;
