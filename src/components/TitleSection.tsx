import React from "react";
import Typography from "@mui/material/Typography";
import "../styles/Title-Section/TitleSection.css";
import WebImgDark from "../img/web.svg";
import WebImgLight from "../img/web-light.svg";
import { Box } from "@mui/material";

interface TitleSectionProps {
  darkMode: boolean;
}

function TitleSection({ darkMode }: TitleSectionProps) {
  return (
    <Box sx={titleContainer}>
      <Typography sx={intro} variant="h6" component="h6">
        Hi, my name is
      </Typography>
      <Box sx={nameAndWebDev}>
        <Typography sx={name} variant="h2" component="h2" className="name">
          KYLE CLOSE
        </Typography>

        <Box sx={webDevContainer}>
          <div className="web-img-container">
            <img src={darkMode ? WebImgDark : WebImgLight} alt="" />
          </div>

          <Typography
            sx={webDev}
            variant="h2"
            component="h2"
            className="web-developer"
          >
            WEB DEVELOPER
          </Typography>
        </Box>
      </Box>
      <Box sx={lineSeparator}></Box>
    </Box>
  );
}

const intro = {
  marginTop: {
    xs: "15px",
    sm: "20px",
    md: "30px",
  },
  color: "#599cff",
  marginBottom: "0",
  width: "100%",
  fontSize: {
    xs: "0.8rem",
    sm: "1rem",
    md: "1.2rem",
  },
};

const nameAndWebDev = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "5px",
  width: "100%",
  flexWrap: "wrap",
};

const titleContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const name = {
  display: "inline-block", // Explicitly setting display to inline-block
  alignItems: "center",
  fontWeight: "600",
  fontSize: {
    xs: "1.3rem",
    sm: "1.5rem",
    md: "1.8rem",
  },
  fontFamily: "Roboto Slab",
};

const webDevContainer = {
  display: "flex",
  alignItems: "flex-end",
  gap: "5px",
};

const webDev = {
  opacity: "0.9",
  display: "inline-block", // Explicitly setting display to inline-block
  alignItems: "center",
  fontWeight: "500",
  fontSize: {
    xs: "1.1rem",
    sm: "1.2rem",
    md: "1.5rem",
  },
  fontFamily: "Roboto Slab",
};

export const lineSeparator = {
  width: "100%",
  backgroundColor: "gray",
  height: "1px",
  marginTop: "20px",
};

export default TitleSection;
