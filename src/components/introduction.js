import React from "react";
import avatar from "../imgs/headshot.svg";
import SocialLinks from "./SocialLinks";

const Introduction = props => {
  return (
    <aside
      className="intro-container"
      id=""
      style={props.mobMenu ? { right: 0 } : null}
    >
      <section className="picBio">
        <img src={avatar} alt="avatar img" className="avatar-img"></img>
      </section>
      <section className="introduction">
        <div className="name">Daryl Botengan</div>
        <p className="aboutMe">Web Developer</p>
      </section>
      <Navbar
        activePage={props.activePage}
        mobMenu={props.mobMenu}
        setMobMenu={props.setMobMenu}
      />
      <SocialLinks />
    </aside>
  );
};

const Navbar = props => {
  const navItems = ["Home", "Skills", "Projects", "Contact"];
  return (
    <nav id="#myMenu">
      <div className="nav-links">
        {navItems.map((item, index) => {
          return (
            <a
              key={index}
              data-menuanchor={item}
              href={`#${item}`}
              className="nav-link"
              onClick={() => {
                props.setMobMenu(!props.mobMenu);
              }}
            >
              {item}
              <hr
                style={props.activePage === item ? { width: "100%" } : null}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Introduction;
