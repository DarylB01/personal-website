import battleshipImg from "../imgs/project-imgs/battleship.svg";
import weatherImg from "../imgs/project-imgs/weather.svg";
import restaurantImg from "../imgs/project-imgs/restaurant.jpg";
import ticTacToeImg from "../imgs/project-imgs/tic-tac-toe.svg";
import blogImg from "../imgs/project-imgs/blog.svg";

class Project {
  constructor(title, imgSrc, desc, techList, demo, github) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.desc = desc;
    this.techList = techList;
    this.src = { demo: demo, github: github };
  }
}
const blog = new Project(
  "Blog Demo",
  blogImg,
  "A demo blog website with a functioning front-end and back-end.",
  ["HTML5", "CSS3", "React", "Javascript", "Node", "Express", "MongoDB"],
  "https://darylb01-blog.netlify.com/#/home",
  "https://github.com/DarylB01/blog-client"
);

const battleship = new Project(
  "Battleship",
  battleshipImg,
  "A simple battleship app with an AI as an opponent",
  ["HTML5", "CSS3", "SASS", "Javascript", "React Testing Library", "React"],
  "https://darylb01-battleship.netlify.com/",
  "https://github.com/DarylB01/battleship"
);
const restaurant = new Project(
  "Restaurant Website",
  restaurantImg,
  "Demo site of made-up restaurant",
  ["HTML5", "CSS3", "Javascript", "React"],
  "https://darylb01-restaurant.netlify.com",
  "https://github.com/DarylB01/restaurant-page/tree/master"
);
const Weather = new Project(
  "Weather",
  weatherImg,
  "Weather App that works with most countries and cities around the world.",
  [
    "HTML5",
    "CSS3",
    "Javascript",
    "JSON",
    "Google API",
    "Dark Sky API",
    "React"
  ],
  "https://darylb01-weather.netlify.com",
  "https://github.com/DarylB01/weather-app"
);
const ticTacToe = new Project(
  "Tic Tac Toe",
  ticTacToeImg,
  "Classic game that you can play with friends or an AI",
  ["HTML5", "CSS3", "Javascript"],
  "https://darylb01-tic-tac-toe.netlify.com/",
  "https://github.com/DarylB01/tic-tac-toe"
);

const projectList = [blog, battleship, Weather, restaurant, ticTacToe];

export default projectList;
