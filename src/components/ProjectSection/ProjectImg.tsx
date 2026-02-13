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
    xs: "100%",
    sm: "250px",
    md: "300px",
  },
  maxWidth: "300px",
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
};

export default ProjectImg;
