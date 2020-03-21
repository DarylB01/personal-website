import React, { useState } from "react";

//Array of objects containing images and info
import Frontend from "./Frontend";
import Backend from "./Backend";
import Other from "./Other";

//Component that displays each skill
import SkillSection from "./SkillSection";

//Images
import leftArrowImg from "../../imgs/skills-imgs/browser/icons8-left-24.png";
import rightArrowImg from "../../imgs/skills-imgs/browser/icons8-right-24.png";
import refereshImg from "../../imgs/skills-imgs/browser/icons8-refresh-30.png";
import menuImg from "../../imgs/skills-imgs/browser/icons8-menu-24.png";
import starImg from "../../imgs/skills-imgs/browser/icons8-star-filled-48.png";

function Skills(props) {
  const [tab, setTab] = useState("Frontend");

  const skillArray = [Frontend, Backend, Other];

  return (
    <section className="skills__container  section" ref={props.skills}>
      <article className="skills__browser">
        <section className="browser__nav">
          <img
            className="nav__leftarr"
            alt="left arrow"
            src={leftArrowImg}
          ></img>
          <img alt="right arrow" src={rightArrowImg}></img>
          <img alt="refresh img" src={refereshImg}></img>
          <div className="nav__addbar">
            http://www.web-dev-skills.com
            <img src={starImg} alt="star"></img>
          </div>
          <img alt="menu img" src={menuImg}></img>
        </section>

        <section className="browser__tabs">
          {skillArray.map((item, index) => {
            //Each tab changes state
            return (
              <div
                key={index}
                style={
                  tab === item.name
                    ? { color: "rgb(78, 77, 77)", backgroundColor: "white" }
                    : null
                }
                onClick={() => {
                  setTab(item.name);
                }}
                className="browser__tab"
              >
                {item.name}
              </div>
            );
          })}
        </section>

        {skillArray.map((skill, index) => {
          return (
            //State Tab changes displayed skill
            <SkillSection
              tab={tab}
              key={index}
              skillList={skill.list}
              skillArea={skill.name}
            />
          );
        })}
      </article>
    </section>
  );
}

export default Skills;
