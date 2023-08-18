import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";
import ProjectButtons from "./ProjectButtons";

import ProjectData from "../../data/projectData";

import { Box } from "@mui/material";

interface ProjectsProps {
  darkMode: boolean;
}

function Projects({ darkMode }: ProjectsProps) {
  const projects = ProjectData.map((data) => {
    return (
      <>
        <Box sx={textAndButtonsContainer}>
          <ProjectText
            title={data.name}
            technologies={data.techStack}
            description={data.description}
          />
          <ProjectButtons live={data.live} source={data.source} />
        </Box>

        <Box sx={imgContainer}>
          <ProjectImg src={darkMode ? data.imgDark : data.imgLight} />
        </Box>
      </>
    );
  });

  return <>{projects}</>;
}

const textAndButtonsContainer = {
  flexGrow: "1",
  maxWidth: {
    sm: "50%",
  },
};

const imgContainer = {
  flexGrow: "1",
  display: "flex",
  justifyContent: {
    sm: "center",
  },
  alignItems: {
    sm: "center",
  },
};

export default Projects;
