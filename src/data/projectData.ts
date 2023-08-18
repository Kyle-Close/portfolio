import darkImgSrc from "../img/laptop-dark.png";
import lightImgSrc from "../img/laptop-light.png";

import snakeLight from "../img/snake-light.png";

const ProjectData = [
  {
    name: "Snake",
    techStack: ["React", "Redux", "Tailwind"],
    description:
      "Clone of the classic snake game. Select from the varying difficulties.",
    source: "https://github.com/Kyle-Close/snake",
    live: "https://kyle-close.github.io/snake/",
    imgDark: darkImgSrc,
    imgLight: snakeLight,
  },
];

export default ProjectData;

// Project name         string
// Technologies used    array
// Description          string
// Source link          string
// Live link            string
// image                imported img
