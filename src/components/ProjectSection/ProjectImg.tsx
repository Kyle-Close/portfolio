import { Box } from "@mui/material";
import imgSrc from "../../img/project-img.png";

function ProjectImg() {
  return (
    <Box sx={{ flexGrow: "1" }}>
      <img src={imgSrc} />
    </Box>
  );
}

export default ProjectImg;
