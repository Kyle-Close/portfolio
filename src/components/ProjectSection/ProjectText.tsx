import { Box, Typography } from "@mui/material";

function ProjectText() {
  return (
    <Box>
      <Typography style={{ margin: "0" }} color="secondary" variant="h5">
        Snake
      </Typography>
      <Typography variant="body1" sx={technologiesTitle}>
        Technologies:{" "}
        <Box
          color={"white"}
          component="span"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "400",
            fontSize: {
              xs: "0.85rem",
              sm: "0.95rem",
              md: "1.1rem",
            },
          }}
        >
          React, Redux, Tailwind
        </Box>
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "5px" }}>
        Clone of the classic snake game. Select from the varying difficulties.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
        saepe mollitia ipsam possimus aliquid? Totam saepe velit, sapiente esse
        mollitia harum aliquam error modi. Eius esse quae numquam eaque quis.
      </Typography>
    </Box>
  );
}

const technologiesTitle = {
  color: "#599cff",
  fontWeight: "500",
  fontFamily: "Roboto Slab",
};

export default ProjectText;
