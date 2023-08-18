import AutoCarousel from "../AutoCarousel";

import { lineSeparator } from "../TitleSection";
import { Box, Typography } from "@mui/material";
import AboutBody from "./AboutBody";

function AboutSection() {
  return (
    <Box sx={aboutContainer} id="about">
      <Typography variant="h3">About</Typography>

      <AboutBody />

      <Typography sx={technologiesTitle} variant="h6">
        Technologies:
      </Typography>

      <AutoCarousel />

      <Box sx={lineSeparator}></Box>
    </Box>
  );
}

const aboutContainer = {
  display: "flex",
  flexDirection: "column",
};

const technologiesTitle = {
  margin: "8px 0",
  color: "#599cff",
};

export default AboutSection;
