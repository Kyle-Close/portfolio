import { Box, Typography } from "@mui/material";

function ProjectText() {
  return (
    <Box>
      <Typography
        color="secondary"
        sx={projectTitle}
        variant="h5"
        component="h5"
      >
        Snake
      </Typography>
      <Typography sx={technologiesTitle}>
        Technologies:{" "}
        <Box color={"white"} sx={{ fontWeight: "400" }} component="span">
          React, Redux, Tailwind
        </Box>
      </Typography>
      <Typography sx={{ marginTop: "5px", fontSize: "0.9rem" }}>
        Clone of the classic snake game. Select from the varying difficulties.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        saepe mollitia ipsam possimus aliquid? Totam saepe velit, sapiente esse
        mollitia harum aliquam error modi. Eius esse quae numquam eaque quis.
      </Typography>
    </Box>
  );
}

const projectTitle = {
  fontSize: "1.1rem",
  fontWeight: "600",
};

const technologiesTitle = {
  color: "#599cff",
  fontWeight: "500",
};

export default ProjectText;
