import { Box, Typography } from "@mui/material";
import Projects from "./Projects";

function ProjectSection() {
  return (
    <Box sx={projectSection}>
      <Typography sx={projectHeading} variant="h3" component="h3">
        Projects
      </Typography>
      <Box sx={projectContainer}>
        <Projects />
      </Box>
    </Box>
  );
}

const projectSection = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const projectHeading = {
  fontWeight: "600",
  fontSize: "1.2rem",
  fontFamily: "Roboto Slab",
  marginBottom: "10px",
};

const projectContainer = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
};

export default ProjectSection;
