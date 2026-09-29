import progressionImg from '../img/progression.webp';
import chessImg from '../img/chess.webp';
import blackjackImg from '../img/blackjack.svg';

const ProjectData = [
  {
    name: 'Chess',
    techStack: ['.NET', 'React', 'TypeScript'],
    description:
      'A full-stack chess application with a .NET API that enforces the complete rules of chess and a React front end. Play pass-and-play with chess clocks, or take on Stockfish at 21 strength levels, starting from any position.',
    source: 'https://github.com/Kyle-Close/chess',
    live: 'https://kyle-close.github.io/chess/',
    img: chessImg,
  },
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
    name: 'Blackjack',
    techStack: ['TypeScript', 'Node.js', 'Vitest'],
    description:
      'A blackjack simulation engine that plays out tens of thousands of hands to measure how playing strategies affect the house edge. Models a multi-deck shoe, a six-seat table, dealer rules, and 3:2 blackjack payouts, logs every run to CSV for analysis, and is backed by a unit test suite. Split hands and a front end are in progress.',
    source: 'https://github.com/Kyle-Close/blackjack',
    live: '',
    img: blackjackImg,
    inProgress: true,
  },
];

export default ProjectData;
