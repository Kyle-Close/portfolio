import AutoCarousel from "../AutoCarousel";

import { lineSeparator } from "../TitleSection";
import { Box, Typography } from "@mui/material";
import AboutBody from "./AboutBody";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box sx={aboutContainer} id="about">
        <Typography variant="h3">About</Typography>

        <Box sx={glassCard}>
          <AboutBody />

          <Typography sx={technologiesTitle} variant="h6">
            Technologies:
          </Typography>

          <AutoCarousel />
        </Box>

        <Box sx={lineSeparator}></Box>
      </Box>
    </motion.div>
  );
}

const aboutContainer = {
  display: "flex",
  flexDirection: "column",
};

const glassCard = {
  background: "var(--glass-bg)",
  backdropFilter: "blur(var(--glass-blur))",
  WebkitBackdropFilter: "blur(var(--glass-blur))",
  border: "1px solid var(--glass-border)",
  borderRadius: "var(--glass-radius)",
  boxShadow: "var(--glass-shadow)",
  padding: {
    xs: "16px",
    sm: "20px",
    md: "24px",
  },
};

const technologiesTitle = {
  margin: "8px 0",
  color: "var(--accent)",
};

export default AboutSection;
