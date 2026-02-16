import React from "react";
import Typography from "@mui/material/Typography";
import "../styles/Title-Section/TitleSection.css";
import WebImgDark from "../img/web.svg";
import WebImgLight from "../img/web-light.svg";
import { Box, Link } from "@mui/material";

interface TitleSectionProps {
  darkMode: boolean;
}

function TitleSection({ darkMode }: TitleSectionProps) {
  return (
    <Box sx={heroSection}>
      <Link
        href="/Kyle_Close_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        sx={resumeButton}
      >
        Resume
      </Link>
      <Typography sx={intro} variant="h6" component="h6">
        Hi, my name is
      </Typography>
      <Box sx={nameAndWebDev}>
        <Typography sx={name} variant="h2" component="h2" className="name">
          KYLE CLOSE
        </Typography>

        <Box sx={webDevContainer}>
          <div className="web-img-container">
            <img src={darkMode ? WebImgDark : WebImgLight} alt="Software development icon" />
          </div>

          <Typography
            sx={webDev}
            variant="h2"
            component="h2"
            className="web-developer"
          >
            SOFTWARE DEVELOPER
          </Typography>
        </Box>
      </Box>
      <Box sx={lineSeparator}></Box>
    </Box>
  );
}

const heroSection = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: {
    xs: "16px",
    sm: "28px",
    md: "48px",
  },
  marginBottom: {
    xs: "8px",
    sm: "16px",
    md: "28px",
  },
  padding: {
    xs: "0",
    sm: "0 4px",
  },
};

const intro = {
  color: "var(--accent)",
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

const name = {
  display: "inline-block",
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
  display: "inline-block",
  alignItems: "center",
  fontWeight: "500",
  fontSize: {
    xs: "1.1rem",
    sm: "1.2rem",
    md: "1.5rem",
  },
  fontFamily: "Roboto Slab",
};

const resumeButton = {
  textDecoration: "none",
  fontWeight: 600,
  letterSpacing: "0.04em",
  fontSize: {
    xs: "0.8rem",
    sm: "0.9rem",
    md: "0.95rem",
  },
  padding: {
    xs: "8px 20px",
    sm: "9px 26px",
  },
  marginLeft: "auto",
  marginBottom: {
    xs: "16px",
    sm: "20px",
  },
  borderRadius: "10px",
  border: "1px solid var(--glass-border)",
  background: "var(--glass-bg)",
  backdropFilter: "blur(var(--glass-blur))",
  color: "var(--accent)",
  boxShadow: "var(--glass-shadow)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "var(--glass-bg-hover)",
    borderColor: "var(--accent)",
    boxShadow: "var(--accent-glow)",
  },
};

export const lineSeparator = {
  width: "100%",
  height: "1px",
  marginTop: "20px",
  background: "linear-gradient(90deg, transparent, var(--glass-border), transparent)",
};

export default TitleSection;
