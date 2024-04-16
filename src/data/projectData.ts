import knightsDark from '../img/knights-dark.png';
import knightsLight from '../img/knights-light.png';

import snakeDark from '../img/snake-dark.png';
import snakeLight from '../img/snake-light.png';

import memoryDark from '../img/memory-dark.png';
import memoryLight from '../img/memory-light.png';

import bitelogDark from '../img/laptop-bitelog-dark.png';

const ProjectData = [
  {
    name: 'Bitelog',
    techStack: ['React', 'Express', 'Postgres', 'Jest'],
    description:
      'Bitelog is a dynamic web application designed to empower individuals to track and analyze their dietary habits in relation to their health. Users can create personalized lists of ingredients and meals, log dietary intakes with detailed timestamps, and record health events such as discomforts or reactions following their meals. This platform serves as a powerful tool for identifying food sensitivities, managing diets, and optimizing nutritional health.',
    source: 'https://github.com/Kyle-Close/bitelog-client',
    live: 'https://kyle-close.github.io/bitelog-client/',
    imgDark: snakeDark,
    imgLight: snakeLight,
  },
  {
    name: 'Memory Mix-Up',
    techStack: ['Javascript', 'HTML', 'CSS'],
    description:
      'Select a theme for each new game. Navigate through levels by clicking on unique images. Be cautious: clicking an image twice will lead to defeat. Remember, images shuffle after every click.',
    source: 'https://github.com/Kyle-Close/memory-card-game',
    live: 'https://kyle-close.github.io/memory-card-game/',
    imgDark: bitelogDark,
    imgLight: bitelogDark,
  },
  {
    name: 'Knights-Travails',
    techStack: ['Javascript', 'HTML', 'CSS'],
    description:
      "A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. In this application, I've used my knowledge of data structures & algorithms to visualize the shortest path. Choose a starting square and ending square, then click calculate to visualize.",
    source: 'https://github.com/Kyle-Close/Knights-Travails',
    live: 'https://kyle-close.github.io/Knights-Travails/',
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
