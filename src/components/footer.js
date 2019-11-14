import React from "react";
import gmailImg from "../imgs/footer/gmail.png";
import linkedInImg from "../imgs/footer/linkedin.png";
import gitHubImg from "../imgs/footer/github-logo.png";

const footer = () => {
  return (
    <footer id="bottom" className="flex f-col">
      <div className="contact">Contact</div>
      <ul className="links flex">
        <a
        href="mailto:dbotengan02@gmail.com"
        >
          <img src={gmailImg} alt="link img" />
        </a>
        <a>
          <img src={linkedInImg} alt="link img" />
        </a>
        <a href="https://github.com/DarylB01"> 
          <img src={gitHubImg} alt="link img" />
        </a>
      </ul>
      <div className="copyright">Made by Daryl B. © 2019</div>
    </footer>
  );
};

export default footer;
