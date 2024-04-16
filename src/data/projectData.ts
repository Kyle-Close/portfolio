import knightsDark from '../img/knights-dark.png';
import knightsLight from '../img/knights-light.png';

import bitelogDark from '../img/laptop-bitelog-dark.png';
import bitelogLight from '../img/laptop-bitelog-light.png';

import blogDark from '../img/laptop-blog-dark.png';
import blogLight from '../img/laptop-blog-light.png';

const ProjectData = [
  {
    name: 'Bitelog',
    techStack: ['React', 'Express', 'Postgres', 'Jest'],
    description:
      'Web application designed to empower individuals to track and analyze their dietary habits in relation to their health. Create personalized lists of ingredients and meals, log dietary intakes with detailed timestamps, and record health events such as discomforts or reactions.',
    source: 'https://github.com/Kyle-Close/bitelog-client',
    live: 'https://kyle-close.github.io/bitelog-client/',
    imgDark: bitelogDark,
    imgLight: bitelogLight,
  },
  {
    name: 'Blogging with Bits',
    techStack: ['React', 'MongoDB', 'Tailwind'],
    description:
      'A blogging site for all things technology! Become an author and create and edit your posts. Post and view comments from other users on any blog post.',
    source: 'https://github.com/Kyle-Close/blog-client',
    live: 'https://blog-gold-seven-38.vercel.app/',
    imgDark: blogDark,
    imgLight: blogLight,
  },
  {
    name: 'Knights-Travails',
    techStack: ['Javascript', 'HTML', 'CSS'],
    description:
      'Shortest path visualizer of a knight in the classic board game, chess.',
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
