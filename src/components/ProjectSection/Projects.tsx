import ProjectText from "./ProjectText";
import ProjectImg from "./ProjectImg";
import ProjectButtons from "./ProjectButtons";

import ProjectData from "../../data/projectData";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

function Projects() {
  const projects = ProjectData.map((data, key) => {
    return (
      <motion.div
        className="glass-card"
        style={{ width: "100%" }}
        key={key}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: key * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.015 }}
      >
        <Box sx={cardPadding}>
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
              <ProjectImg src={data.img} name={data.name} />
            </Box>
          </Box>
        </Box>
      </motion.div>
    );
  });

  return <>{projects}</>;
}

const cardPadding = {
  padding: {
    xs: "14px 12px",
    sm: "20px",
    md: "24px",
  },
};

const innerContainer = {
  display: "flex",
  flexGrow: "1",
  flexWrap: "wrap",
  gap: {
    xs: "12px",
    sm: "15px",
  },
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
    xs: "center",
    sm: "center",
  },
  alignItems: {
    sm: "center",
  },
};

export default Projects;
