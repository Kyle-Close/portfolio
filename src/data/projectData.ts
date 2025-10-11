import chessDark from '../img/chess-dark.png'
import chessLight from '../img/chess-laptop-light.png'

import bitelogDark from '../img/bitelog-laptop-dark.png'
import bitelogLight from '../img/bitelog-laptop-light.png';

import blogDark from '../img/blog-laptop-dark.png';
import blogLight from '../img/blog-laptop-light.png';

const ProjectData = [
  {
    name: 'Chess',
    techStack: ['.NET', 'React', 'Typescript'],
    description:
      'A full-stack chess application built with .NET and React, featuring real-time move validation, game state tracking, and Stockfish integration for AI-powered analysis.',
    source: 'https://github.com/Kyle-Close/Knights-Travails',
    live: 'https://kyle-close.github.io/chess/',
    imgDark: chessDark,
    imgLight: chessLight,
  },
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
];

export default ProjectData;

// Project name         string
// Technologies used    array
// Description          string
// Source link          string
// Live link            string
// image                imported img
