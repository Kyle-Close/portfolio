import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";
import ProjectButtons from "./ProjectButtons";

import { Box } from "@mui/material";

function Projects() {
  return (
    <>
      <Box sx={textAndButtonsContainer}>
        <ProjectText />
        <ProjectButtons />
      </Box>

      <Box sx={imgContainer}>
        <ProjectImg />
      </Box>
    </>
  );
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

/*  TODO
    - Img needs to scale for screen size. Probably 2 sizes. 1 for large and 1 for phone
    - Text size needs adjusted at all screen sizes.
*/

export default Projects;
