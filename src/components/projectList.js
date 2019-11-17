import battleshipImg from "../imgs/project-imgs/battleship.svg";
import weatherImg from "../imgs/project-imgs/weather.svg";
import restaurantImg from "../imgs/project-imgs/restaurant.jpg";
import ticTacToeImg from "../imgs/project-imgs/tic-tac-toe.png";
import libraryImg from "../imgs/project-imgs/library.jpg";

class Project {
  constructor(title, imgSrc, desc, techList, demo, github) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.desc = desc;
    this.techList = techList;
    this.src = { demo: demo, github: github };
  }
}
const battleship = new Project(
  "Battleship",
  battleshipImg,
  "A simple battleship app with an AI as an opponent. The testing I used for this was the React Testing Library",
  ["HTML5", "CSS3", "SASS", "Javascript", "React Testing Library", "React"],
  "https://darylb01-battleship.netlify.com/",
  "https://github.com/DarylB01/battleship"
);
const restaurant = new Project(
  "Restaurant Website",
  restaurantImg,
  "Restaurant Page mockup where I first learned to practice React",
  ["HTML5", "CSS3", "Javascript", "React"],
  "https://darylb01-restaurant-page.netlify.com",
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
  "https://darylb01-weather-app.netlify.com",
  "https://github.com/DarylB01/weather-app"
);
const ticTacToe = new Project(
  "Tic Tac Toe",
  ticTacToeImg,
  "A fun tic tac toe game you can play! You have a choice to play against an AI or human opponent",
  ["HTML5", "CSS3", "Javascript"],
  "https://darylb01-tic-tac-toe.netlify.com/",
  "https://github.com/DarylB01/tic-tac-toe"
);
const library = new Project(
  "Library",
  libraryImg,
  "Keeps track of any books you've finished or are currently reading.",
  ["HTML5", "CSS3", "Bootstrap", "Javascript"],
  "https://library-project-daryl.herokuapp.com/index.html",
  "https://github.com/DarylB01/library-daryl"
);

const projectList = [battleship, Weather, restaurant, ticTacToe, library];

export default projectList;
