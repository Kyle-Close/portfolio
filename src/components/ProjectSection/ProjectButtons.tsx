import { Box, Button } from "@mui/material";

interface ProjectButtonsProps {
  live: string;
  source: string;
}

function ProjectButtons({ live, source }: ProjectButtonsProps) {
  return (
    <Box sx={buttonContainer}>
      <Button
        href={live}
        color="secondary"
        size="large"
        sx={liveButton}
        variant="outlined"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live
      </Button>
      <Button
        href={source}
        sx={sourceButton}
        variant="outlined"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </Button>
    </Box>
  );
}

const buttonContainer = {
  marginTop: "20px",
  display: "flex",
  gap: "15px",
};

const liveButton = {
  borderRadius: "25px",
  width: "33%",
  maxWidth: "150px",
};

const sourceButton = {
  borderRadius: "25px",
  width: "50%",
  maxWidth: "300px",
  color: "#599cff",
};

export default ProjectButtons;
