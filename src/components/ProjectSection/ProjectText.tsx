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
      <Typography style={{ margin: "0", marginBottom: "8px" }} color="secondary" variant="h5">
        {title}
      </Typography>
      <Typography variant="body1" sx={technologiesTitle}>
        Technologies:{" "}
        <Box component="span" sx={{ color: "text.primary" }}>
          {techString}
        </Box>
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "10px", opacity: 0.85 }}>
        {description}
      </Typography>
    </Box>
  );
}

const technologiesTitle = {
  color: "var(--accent)",
  fontWeight: "500",
  fontFamily: "Roboto Slab",
};

export default ProjectText;
