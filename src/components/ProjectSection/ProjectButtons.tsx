import { Box, Button } from "@mui/material";

function ProjectButtons() {
  return (
    <Box sx={buttonContainer}>
      <Button color="secondary" size="large" sx={liveButton} variant="outlined">
        Live
      </Button>
      <Button sx={sourceButton} variant="outlined">
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
