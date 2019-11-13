import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import Skills from "./components/skills";
import Introduction from "./components/introduction";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";

class Index extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Introduction />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

serviceWorker.unregister();
