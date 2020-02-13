import React from "react";
import avatar from "../imgs/headshot.svg";
import SocialLinks from "./SocialLinks";

const Introduction = props => {
  return (
    <aside className="intro-container" id="">
      <section className="picBio">
        <img src={avatar} alt="avatar img" className="avatar-img"></img>
      </section>
      <section className="introduction">
        <div className="name">Daryl Botengan</div>
        <p className="aboutMe">Web Developer</p>
      </section>
      <Navbar activePage={props.activePage} />
      <SocialLinks />
    </aside>
  );
};

const Navbar = props => {
  // scrollFunction();
  return (
    <nav id="#myMenu">
      <div className="nav-links">
        <a data-menuanchor="Home" href="#Home" className="nav-link">
          Home
          <hr style={props.activePage === "Home" ? { width: "100%" } : null} />
        </a>
        <a data-menuanchor="Skills" href="#Skills" className="nav-link">
          Skills
          <hr
            style={props.activePage === "Skills" ? { width: "100%" } : null}
          />
        </a>
        <a data-menuanchor="Projects" href="#Projects" className="nav-link">
          Projects
          <hr
            style={props.activePage === "Projects" ? { width: "100%" } : null}
          />
        </a>
        <a data-menuanchor="Contact" href="#Contact" className="nav-link">
          Contact
          <hr
            style={props.activePage === "Contact" ? { width: "100%" } : null}
          />
        </a>
      </div>
    </nav>
  );
};

export default Introduction;
