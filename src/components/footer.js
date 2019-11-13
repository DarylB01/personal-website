import React from "react";

const footer = () => {
  return (
    <footer id="bottom" className="flex f-col">
      <div className="contact">Contact</div>
      <ul className="links flex">
        <a>
          <img
            src="https://img.icons8.com/dusk/128/000000/gmail.png"
            alt="link img"
          />
        </a>
        <a>
          <img
            src="https://img.icons8.com/dusk/128/000000/linkedin.png"
            alt="link img"
          />
        </a>
        <a>
          <img
            src="https://img.icons8.com/dusk/128/000000/github.png"
            alt="link img"
          />
        </a>
      </ul>
      <div className="copyright">Made by Daryl B. © 2019</div>
    </footer>
  );
};

export default footer;
