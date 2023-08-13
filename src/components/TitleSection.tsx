import React from "react";
import Typography from "@mui/material/Typography";
import "../styles/Title-Section/TitleSection.css";
import WebImg from "../img/web.svg";
import { Box } from "@mui/material";

function TitleSection() {
  return (
    <Box sx={titleContainer}>
      <h5 className="intro">Hi, my name is</h5>
      <Box sx={nameAndWebDev}>
        <Typography sx={name} variant="h2" component="h2" className="name">
          KYLE CLOSE
        </Typography>

        <Box sx={webDevContainer}>
          <div className="web-img-container">
            <img src={WebImg} alt="" />
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
    </Box>
  );
}

const nameAndWebDev = {
  display: "flex",
  justifyContent: "space-between",
  gap: "15px",
  width: "100%",
  flexWrap: "wrap",
};

const titleContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const name = {
  "::first-letter": {
    fontSize: {
      xs: "1.7rem",
      sm: "2rem",
      md: "2.5rem",
    },
  },
  display: "inline-block", // Explicitly setting display to inline-block
  alignItems: "center",
  fontWeight: "600",
  fontSize: {
    xs: "1.2rem",
    sm: "1.5rem",
    md: "1.8rem",
  },
};

const webDevContainer = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const webDev = {
  opacity: "0.75",
  "::first-letter": {
    fontSize: {
      xs: "1.7rem",
      sm: "2rem",
      md: "2.5rem",
    },
  },
  display: "inline-block", // Explicitly setting display to inline-block
  alignItems: "center",
  fontWeight: "500",
  fontSize: {
    xs: "1rem",
    sm: "1.2rem",
    md: "1.5rem",
  },
};

export default TitleSection;
