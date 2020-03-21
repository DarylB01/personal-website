import React from "react";

//Images
import fbImg from "../../imgs/socialLinks/facebook.png";
import linkedInImg from "../../imgs/socialLinks/linkedin.png";
import gitHubImg from "../../imgs/socialLinks/github-logo.png";

const socialLinks = () => {
  return (
    <section className="social">
      <ul className="social__links">
        <a
          className="social__link"
          href="https://www.facebook.com/profile.php?id=100018023145314"
        >
          <img src={fbImg} alt="link img" />
        </a>
        <a
          className="social__link"
          href="https://www.linkedin.com/in/daryl-botengan-061954197/"
        >
          <img src={linkedInImg} alt="link img" />
        </a>
        <a className="social__link" href="https://github.com/DarylB01">
          <img src={gitHubImg} alt="link img" />
        </a>
      </ul>
    </section>
  );
};

export default socialLinks;
