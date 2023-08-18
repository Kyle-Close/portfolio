import { Box } from "@mui/material";
import imgSrc from "../../img/project-img.png";

function ProjectImg() {
  return (
    <Box>
      <Box component="img" src={imgSrc} alt="Description" sx={img} />
    </Box>
  );
}

const img = {
  width: {
    xs: "200px",
    sm: "220px",
    md: "240px",
  },
};

export default ProjectImg;
