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

const glassButtonBase = {
  borderRadius: "25px",
  background: "var(--glass-bg)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid var(--glass-border)",
  transition: "var(--glass-transition)",
  "&:hover": {
    borderColor: "var(--accent)",
    boxShadow: "var(--accent-glow)",
    background: "var(--glass-bg-hover)",
  },
};

const liveButton = {
  ...glassButtonBase,
  width: "33%",
  maxWidth: "150px",
};

const sourceButton = {
  ...glassButtonBase,
  width: "50%",
  maxWidth: "300px",
  color: "var(--accent)",
};

export default ProjectButtons;
