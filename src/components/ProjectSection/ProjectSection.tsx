import { Box, Typography } from "@mui/material";
import Projects from "./Projects";
import { lineSeparator } from "../TitleSection";
import { motion } from "framer-motion";

interface ProjectSectionProps {
  darkMode: boolean;
}

function ProjectSection({ darkMode }: ProjectSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box id="projects" sx={projectSection}>
        <Typography sx={projectHeading} variant="h3">
          Projects
        </Typography>
        <Box sx={projectContainer}>
          <Projects darkMode={darkMode} />
        </Box>
        <Box sx={lineSeparator}></Box>
      </Box>
    </motion.div>
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
  gap: {
    xs: "16px",
    sm: "24px",
    md: "30px",
  },
};

export default ProjectSection;
