import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import Skills from "./components/Skills/Skills";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ReactFullpage from "@fullpage/react-fullpage";
import headshot from "./imgs/headshot.svg";

const Index = () => {
  let [activePage, setActivePage] = useState("Home");
  let [index, setIndex] = useState(0);
  let [lastScroll, setLastScroll] = useState(0);
  let [mobMenu, setMobMenu] = useState(false);

  let about = useRef(null);
  let skills = useRef(null);
  let projects = useRef(null);
  let contact = useRef(null);

  let doms = {
    mobMenu,
    setMobMenu,
    about,
    skills,
    projects,
    contact,
    setActivePage,
    activePage
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <img
        alt="avatar"
        className={
          mobMenu === false ? "mobile__avatar" : "mobile__avatar --hide"
        }
        src={headshot}
        onClick={() => {
          setMobMenu(!mobMenu);
          console.log(mobMenu);
        }}
      ></img>
      <Introduction
        activePage={activePage}
        mobMenu={mobMenu}
        setMobMenu={setMobMenu}
      />
      <Fullpage doms={doms} />
    </React.Fragment>
  );
};

const Fullpage = props => (
  <ReactFullpage
    anchors={["Home", "Skills", "Projects", "Contact"]}
    licenseKey={"1B4AEBBA-C7144838-8F26F81F-0FF50C3D"}
    afterLoad={(origin, destination, direction) => {
      props.doms.setActivePage(destination.anchor);
      destination.item.style.opacity = "1";
    }}
    onLeave={(origin, destination, direction) => {
      props.doms.setActivePage(null);
      origin.item.style.opacity = "0";
    }}
    scrollingSpeed={400} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <main
            id="main"
            onClick={() => {
              props.doms.setMobMenu(false);
            }}
          >
            <About
              about={props.doms.about}
              activePage={props.doms.activePage}
            />
            <Skills skills={props.doms.skills} />
            <Projects projects={props.doms.projects} />
            <Contact contact={props.doms.contact} />
          </main>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
