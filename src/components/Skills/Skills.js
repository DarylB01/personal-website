import React, { useState } from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Other from "./Other";
import leftArrow from "../../imgs/skills-imgs/browser/icons8-left-24.png";
import rightArrow from "../../imgs/skills-imgs/browser/icons8-right-24.png";
import referesh from "../../imgs/skills-imgs/browser/icons8-refresh-30.png";
import menu from "../../imgs/skills-imgs/browser/icons8-menu-24.png";
import star from "../../imgs/skills-imgs/browser/icons8-star-filled-48.png";
import ScrollAnimation from "react-animate-on-scroll";

function Skills(props) {
  const [tab, setTab] = useState("Frontend");
  const tabs = ["Frontend", "Backend", "Other"];
  return (
    <section className="skills__container  section" ref={props.skills}>
      <article className="skills__browser">
        <section className="browser__nav">
          <img className="nav__leftarr" alt="left arrow" src={leftArrow}></img>
          <img alt="right arrow" src={rightArrow}></img>
          <img alt="refresh img" src={referesh}></img>
          <div className="nav__addbar">
            http://www.web-dev-skills.com
            <img src={star} alt="star"></img>
          </div>
          <img alt="menu img" src={menu}></img>
        </section>
        <section className="browser__tabs">
          {tabs.map((item, index) => {
            return (
              <div
                key={index}
                style={
                  tab === item
                    ? { color: "rgb(78, 77, 77)", backgroundColor: "white" }
                    : null
                }
                onClick={() => {
                  setTab(item);
                }}
                className="browser__tab"
              >
                {item}
              </div>
            );
          })}
        </section>
        <Frontend tab={tab} />
        <Backend tab={tab} />
        <Other tab={tab} />
      </article>
    </section>
    // </ScrollAnimation>
  );
}

export default Skills;
