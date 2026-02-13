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
  marginTop: {
    xs: "14px",
    sm: "20px",
  },
  display: "flex",
  gap: {
    xs: "10px",
    sm: "15px",
  },
};

const glassButtonBase = {
  borderRadius: "20px",
  background: "var(--glass-bg)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid var(--glass-border)",
  transition: "var(--glass-transition)",
  fontSize: {
    xs: "0.8rem",
    sm: "0.875rem",
  },
  padding: {
    xs: "6px 16px",
    sm: "8px 22px",
  },
  "&:hover": {
    borderColor: "var(--accent)",
    boxShadow: "var(--accent-glow)",
    background: "var(--glass-bg-hover)",
  },
};

const liveButton = {
  ...glassButtonBase,
  flex: {
    xs: 1,
    sm: "none",
  },
  width: {
    sm: "120px",
  },
};

const sourceButton = {
  ...glassButtonBase,
  flex: {
    xs: 1,
    sm: "none",
  },
  width: {
    sm: "140px",
  },
  color: "var(--accent)",
};

export default ProjectButtons;
