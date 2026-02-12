import { Box } from "@mui/material";

interface ProjectImgProps {
  src: string;
  name: string;
}

function ProjectImg({ src, name }: ProjectImgProps) {
  return (
    <Box>
      <Box component="img" src={src} alt={`Screenshot of ${name}`} loading="lazy" sx={img} />
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
