import { Box, Typography } from "@mui/material";

interface ProjectTextProps {
  title: string;
  technologies: Array<string>;
  description: string;
}

function ProjectText({ title, technologies, description }: ProjectTextProps) {
  let techString = "";
  technologies.forEach((technology) => {
    techString += technology + ", ";
  });
  techString = techString.slice(0, -2); // Remove trailing ", "
  return (
    <Box>
      <Typography style={{ margin: "0" }} color="secondary" variant="h5">
        {title}
      </Typography>
      <Typography variant="body1" sx={technologiesTitle}>
        Technologies:{" "}
        <Box color={"white"} component="span">
          {techString}
        </Box>
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "5px" }}>
        {description}
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
