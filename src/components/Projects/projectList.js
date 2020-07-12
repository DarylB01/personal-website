//Website backgrounds
import gladzyPic from "../../imgs/project-imgs/gladzy-pic.jpg";
import weatherImg from "../../imgs/project-imgs/weather.svg";
import cfmcImg from "../../imgs/project-imgs/cfmcImg.jpg";
import etchASketchImg from "../../imgs/project-imgs/etchASketchImg.jpg";
//Website Logos
import gladzyLogo from "../../imgs/project-imgs/gladzy-logo.png";
import weatherLogo from "../../imgs/project-imgs/weather-logo.png";
import cfmcLogo from "../../imgs/project-imgs/cfmcLogoWhite.png";
import etchASketchLogo from "../../imgs/project-imgs/etchASketch-logo.png";

class Project {
  constructor(title, imgSrc, desc, demo, siteColor, logo) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.desc = desc;
    this.src = { demo: demo };
    this.siteColor = siteColor;
    this.logo = logo;
  }
}
const cfmcSite = new Project(
  "Calgary Filipino Methodist Church",
  cfmcImg,
  "Website for local Calgary Church",
  "https://cfmc.netlify.com/",
  "#003a69",
  cfmcLogo
);

const gladzySite = new Project(
  "Gladzy Kei Art & Cosplay",
  gladzyPic,
  "Portfolio website for a well-known cosplayer in Calgary",
  "https://gladzy-portfolio.netlify.com/",
  "rgb(46, 2, 59)",
  gladzyLogo
);
const etchASketch = new Project(
  "Etch-A-Sketch",
  etchASketchImg,
  "Simple drawing app made with JavaScript",
  "https://daryl-etch-app.netlify.app/",
  "black",
  etchASketchLogo
);
const Weather = new Project(
  "Weather",
  weatherImg,
  "Weather App that works with most countries and cities around the world",
  "https://darylb01-weather.netlify.app/",
  "#032c3f",
  weatherLogo
);

const projectList = [cfmcSite, gladzySite, Weather, etchASketch];

export default projectList;
