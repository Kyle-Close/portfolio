import { Box, Typography } from "@mui/material";
import React from "react";

function ProjectSection() {
  return (
    <Box sx={projectSection}>
      <Typography sx={projectHeading} variant="h3" component="h3">
        Projects
      </Typography>
      <Box sx={projectContainer}>
        <Typography sx={projectTitle} variant="h5" component="h5">
          Snake
        </Typography>
        <Typography sx={technologiesTitle}>
          Technologies:{" "}
          <Box sx={{ color: "white", fontWeight: "400" }} component="span">
            React, Redux, Tailwind
          </Box>
        </Typography>
        <Typography sx={{ marginTop: "5px", fontSize: "0.9rem" }}>
          Clone of the classic snake game. Select from the varying difficulties.
        </Typography>
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
  fontWeight: "500",
  fontSize: "1.2rem",
};

const projectContainer = {
  display: "flex",
  flexDirection: "column",
};

const projectTitle = {
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#599cff",
};

const technologiesTitle = {
  color: "#FFC700",
  fontWeight: "500",
};

export default ProjectSection;
