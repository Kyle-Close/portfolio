import { Box, Button, Typography } from "@mui/material";
import React from "react";

function ProjectSection() {
  return (
    <Box sx={projectSection}>
      <Typography sx={projectHeading} variant="h3" component="h3">
        Projects
      </Typography>
      <Box sx={projectContainer}>
        <Typography
          color="secondary"
          sx={projectTitle}
          variant="h5"
          component="h5"
        >
          Snake
        </Typography>
        <Typography sx={technologiesTitle}>
          Technologies:{" "}
          <Box color={"white"} sx={{ fontWeight: "400" }} component="span">
            React, Redux, Tailwind
          </Box>
        </Typography>
        <Typography sx={{ marginTop: "5px", fontSize: "0.9rem" }}>
          Clone of the classic snake game. Select from the varying difficulties.
        </Typography>
        <Box sx={buttonContainer}>
          <Button
            color="secondary"
            size="large"
            sx={liveButton}
            variant="outlined"
          >
            Live
          </Button>
          <Button sx={sourceButton} variant="outlined">
            Source
          </Button>
        </Box>
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
};

const projectContainer = {
  display: "flex",
  flexDirection: "column",
};

const projectTitle = {
  fontSize: "1.1rem",
  fontWeight: "600",
};

const technologiesTitle = {
  color: "#599cff",
  fontWeight: "500",
};

const buttonContainer = {
  marginTop: "20px",
  display: "flex",
  gap: "15px",
};

const liveButton = {
  borderRadius: "25px",
  width: "33%",
  maxWidth: "150px",
};

const sourceButton = {
  borderRadius: "25px",
  width: "50%",
  maxWidth: "300px",
  color: "#599cff",
};

export default ProjectSection;
