//Website backgrounds
import gladzyPic from "../../imgs/project-imgs/gladzy-pic.jpg";
import weatherImg from "../../imgs/project-imgs/weather.svg";
import restaurantImg from "../../imgs/project-imgs/restaurant.jpg";
import ticTacToeImg from "../../imgs/project-imgs/tic-tac-toe.svg";
import blogImg from "../../imgs/project-imgs/blog.jpg";

//Website Logos
import gladzyLogo from "../../imgs/project-imgs/gladzy-logo.png";
import blogLogo from "../../imgs/project-imgs/blog-logo.png";
import weatherLogo from "../../imgs/project-imgs/weather-logo.png";
import restaurantLogo from "../../imgs/project-imgs/restaurant-logo.png";
import tictactoelogo from "../../imgs/project-imgs/tictactoe-logo.png";

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
const restaurant = new Project(
  "Restaurant Website",
  restaurantImg,
  "Demo site of made-up restaurant",
  "https://darylb01-restaurant.netlify.com",
  "#304E5C",
  restaurantLogo
);
const Weather = new Project(
  "Weather",
  weatherImg,
  "Weather App that works with most countries and cities around the world",
  "https://darylb01-weather.netlify.com",
  "#032c3f",
  weatherLogo
);
const ticTacToe = new Project(
  "Tic Tac Toe",
  ticTacToeImg,
  "Classic game that you can play with friends or an AI",
  "https://darylb01-tic-tac-toe.netlify.com/",
  "black",
  tictactoelogo
);

const projectList = [gladzySite, blog, Weather, restaurant, ticTacToe];

export default projectList;
