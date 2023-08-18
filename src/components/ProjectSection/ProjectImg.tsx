import { Box } from "@mui/material";

interface ProjectImgProps {
  src: string;
}

function ProjectImg({ src }: ProjectImgProps) {
  return (
    <Box>
      <Box component="img" src={src} alt="Description" sx={img} />
    </Box>
  );
}

const img = {
  width: {
    xs: "230px",
    sm: "250px",
    md: "300px",
  },
};

export default ProjectImg;
