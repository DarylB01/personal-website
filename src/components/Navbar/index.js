import React from "react";

import SocialLinks from "./SocialLinks";
//Images
import avatar from "../../imgs/headshot.svg";


const Navbar = props => {
  return (
    <aside
      className="intro-container"
      id=""
      style={props.mobileMenu ? { right: 0 } : null}
    >
      <section className="picBio">
        <img src={avatar} alt="avatar img" className="avatar-img"></img>
      </section>
      <section className="introduction">
        <div className="name">Daryl Botengan</div>
        <p className="aboutMe">Web Developer</p>
      </section>
      <Navigation
        activePage={props.activePage}
        mobileMenu={props.mobileMenu}
        setMobileMenu={props.setMobileMenu}
      />
      <SocialLinks />
    </aside>
  );
};

const Navigation = props => {
  const navItems = ["About", "Skills", "Projects", "Contact"];
  return (
    // State that changes current selected page is in index
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
                props.setMobileMenu(!props.mobileMenu);
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

export default Navbar;
