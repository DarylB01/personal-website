//Website backgrounds
import gladzyPic from "../../imgs/project-imgs/gladzy-pic.jpg";
import weatherImg from "../../imgs/project-imgs/weather.svg";
import restaurantImg from "../../imgs/project-imgs/restaurant.jpg";
import cfmcImg from "../../imgs/project-imgs/cfmcImg.jpg";
import blogImg from "../../imgs/project-imgs/blog.jpg";

//Website Logos
import gladzyLogo from "../../imgs/project-imgs/gladzy-logo.png";
import blogLogo from "../../imgs/project-imgs/blog-logo.png";
import weatherLogo from "../../imgs/project-imgs/weather-logo.png";
import restaurantLogo from "../../imgs/project-imgs/restaurant-logo.png";
import cfmcLogo from "../../imgs/project-imgs/cfmcLogoWhite.png";

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
const blog = new Project(
  "Blog Demo",
  blogImg,
  "A demo blog website with a functioning front-end and back-end",
  "https://darylb01-blog.netlify.com/#/home",
  "black",
  blogLogo
);
const Weather = new Project(
  "Weather",
  weatherImg,
  "Weather App that works with most countries and cities around the world",
  "https://darylb01-weather.netlify.com",
  "#032c3f",
  weatherLogo
);

const projectList = [cfmcSite, gladzySite, Weather, blog];

export default projectList;
