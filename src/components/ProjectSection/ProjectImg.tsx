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
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
};

export default ProjectImg;
