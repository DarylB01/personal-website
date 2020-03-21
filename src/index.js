import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";

//Components
import Skills from "./components/Skills";
import Navbar from "./components/Navbar/index";
import Projects from "./components/Projects/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";

//module to scroll only in full pages length
import ReactFullpage from "@fullpage/react-fullpage";

//avatar img
import headshot from "./imgs/headshot.svg";

const Index = () => {
  let [activePage, setActivePage] = useState("Home");
  let [mobileMenu, setMobileMenu] = useState(false);

  //props being passed down to lower components
  let doms = {
    mobileMenu,
    setMobileMenu,
    setActivePage,
    activePage
  };

  return (
    <React.Fragment>
      {/* Mobile menu only shows on smaller devices */}
      <img
        alt="avatar"
        className={
          mobileMenu === false ? "mobile__avatar" : "mobile__avatar --hide"
        }
        src={headshot}
        onClick={() => {
          setMobileMenu(!mobileMenu);
          console.log(mobileMenu);
        }}
      ></img>
      {/* Mobile menu only shows on smaller devices */}

      <Navbar
        activePage={activePage}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Fullpage doms={doms} />
    </React.Fragment>
  );
};

const Fullpage = props => (
  <ReactFullpage
    anchors={["About", "Skills", "Projects", "Contact"]}
    licenseKey={"1B4AEBBA-C7144838-8F26F81F-0FF50C3D"}
    //Execute functions when entering destination page
    afterLoad={(origin, destination, direction) => {
      props.doms.setActivePage(destination.anchor);
      destination.item.style.opacity = "1";
    }}
    //Execute Functions When leaving current page
    onLeave={(origin, destination, direction) => {
      props.doms.setActivePage(null);
      origin.item.style.opacity = "0";
    }}
    scrollingSpeed={400} /* Options here */
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <main
            id="main"
            onClick={() => {
              props.doms.setMobileMenu(false);
            }}
          >
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
