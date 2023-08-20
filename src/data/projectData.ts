import knightsDark from "../img/knights-dark.png";
import knightsLight from "../img/knights-light.png";

import snakeDark from "../img/snake-dark.png";
import snakeLight from "../img/snake-light.png";

import memoryDark from "../img/memory-dark.png";
import memoryLight from "../img/memory-light.png";

const ProjectData = [
  {
    name: "Memory Mix-Up",
    techStack: ["Javascript", "HTML", "CSS"],
    description:
      "Select a theme for each new game. Navigate through levels by clicking on unique images. Be cautious: clicking an image twice will lead to defeat. Remember, images shuffle after every click.",
    source: "https://github.com/Kyle-Close/memory-card-game",
    live: "https://kyle-close.github.io/memory-card-game/",
    imgDark: memoryDark,
    imgLight: memoryLight,
  },
  {
    name: "Snake",
    techStack: ["React", "Redux", "Tailwind"],
    description:
      "Re-creation of the clasic game, Snake. Select between 3 difficulties.",
    source: "https://github.com/Kyle-Close/Knights-Travails",
    live: "https://kyle-close.github.io/Knights-Travails/",
    imgDark: snakeDark,
    imgLight: snakeLight,
  },
  {
    name: "Knights-Travails",
    techStack: ["Javascript", "HTML", "CSS"],
    description:
      "A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. In this application, I've used my knowledge of data structures & algorithms to visualize the shortest path. Choose a starting square and ending square, then click calculate to visualize.",
    source: "https://github.com/Kyle-Close/Knights-Travails",
    live: "https://kyle-close.github.io/Knights-Travails/",
    imgDark: knightsDark,
    imgLight: knightsLight,
  },
];

export default ProjectData;

// Project name         string
// Technologies used    array
// Description          string
// Source link          string
// Live link            string
// image                imported img
