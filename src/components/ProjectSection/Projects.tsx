import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";
import ProjectButtons from "./ProjectButtons";

import ProjectData from "../../data/projectData";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface ProjectsProps {
  darkMode: boolean;
}

function Projects({ darkMode }: ProjectsProps) {
  const projects = ProjectData.map((data, key) => {
    return (
      <motion.div
        className="glass-card"
        style={{ padding: "24px" }}
        key={key}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: key * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.015 }}
      >
        <Box sx={innerContainer}>
          <Box sx={textAndButtonsContainer}>
            <ProjectText
              title={data.name}
              technologies={data.techStack}
              description={data.description}
            />
            <ProjectButtons live={data.live} source={data.source} />
          </Box>

          <Box sx={imgContainer}>
            <ProjectImg src={darkMode ? data.imgDark : data.imgLight} name={data.name} />
          </Box>
        </Box>
      </motion.div>
    );
  });

  return <>{projects}</>;
}

const innerContainer = {
  display: "flex",
  flexGrow: "1",
  flexWrap: "wrap",
  gap: "15px",
};

const textAndButtonsContainer = {
  flexGrow: "1",
  maxWidth: {
    sm: "50%",
  },
};

const imgContainer = {
  flexGrow: "1",
  display: "flex",
  justifyContent: {
    sm: "center",
  },
  alignItems: {
    sm: "center",
  },
};

export default Projects;
