import AutoCarousel from "../AutoCarousel";

import { lineSeparator } from "../TitleSection";
import { Box, Typography } from "@mui/material";
import AboutBody from "./AboutBody";

function AboutSection() {
  return (
    <Box sx={aboutContainer} id="about">
      <Typography sx={headerTitle} variant="h5">
        About
      </Typography>

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
  fontWeight: "400",
  fontSize: {
    xs: "1rem",
    sm: "1.5rem",
  },
};

const headerTitle = {
  marginBottom: "0",
  fontFamily: "Roboto Slab",
};

const technologiesTitle = {
  marginTop: "8px",
  color: "#599cff",
};

export default AboutSection;
