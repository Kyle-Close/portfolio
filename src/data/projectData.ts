import progressionImg from '../img/progression.webp';
import chessImg from '../img/chess.webp';
import asteroidsImg from '../img/asteroids.webp';

const ProjectData = [
  {
    name: 'Progression',
    techStack: ['React', 'FastAPI', 'SQLite', 'TypeScript'],
    description:
      'A full-stack workout tracker for structured strength training. Automatically calculates working weights from one rep max percentages, tracks progressive overload across weekly cycles, and includes a built-in Stronger by Science linear progression template. Features plate breakdowns, exercise history, and body weight tracking.',
    source: 'https://github.com/Kyle-Close/workout',
    live: 'https://kyle-close.github.io/workout-client/',
    img: progressionImg,
  },
  {
    name: 'Chess',
    techStack: ['.NET', 'React', 'Typescript'],
    description:
      'A full-stack chess application built with .NET and React, featuring real-time move validation, game state tracking, and Stockfish integration for AI-powered analysis.',
    source: 'https://github.com/Kyle-Close/chess',
    live: 'https://kyle-close.github.io/chess/',
    img: chessImg,
  },
  {
    name: 'Asteroids',
    techStack: ['Python', 'Pygame'],
    description:
      'A classic Asteroids arcade game built with Pygame. Features player ship movement and rotation, shooting mechanics with cooldown, asteroid splitting on impact, and circle-based collision detection. Asteroids spawn from screen edges and break into smaller, faster fragments when shot.',
    source: 'https://github.com/Kyle-Close/Asteroids',
    live: '',
    img: asteroidsImg,
  },
];

export default ProjectData;

// Project name         string
// Technologies used    array
// Description          string
// Source link          string
// Live link            string
// image                imported img
