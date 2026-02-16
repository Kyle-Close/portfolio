import { Box } from "@mui/material";

interface ProjectImgProps {
  src: string;
  name: string;
}

function ProjectImg({ src, name }: ProjectImgProps) {
  return (
    <Box sx={browserFrame}>
      <Box sx={toolbar}>
        <Box sx={trafficLights}>
          <Box sx={{ ...dot, backgroundColor: "#ff5f57" }} />
          <Box sx={{ ...dot, backgroundColor: "#febc2e" }} />
          <Box sx={{ ...dot, backgroundColor: "#28c840" }} />
        </Box>
        <Box sx={urlBar}>{name.toLowerCase().replace(/\s+/g, "-")}.app</Box>
        <Box sx={trafficLightsSpacer} />
      </Box>
      <Box
        component="img"
        src={src}
        alt={`Screenshot of ${name}`}
        loading="lazy"
        sx={img}
      />
    </Box>
  );
}

const browserFrame = {
  width: {
    xs: "100%",
    sm: "250px",
    md: "300px",
  },
  maxWidth: "300px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.25)",
  backgroundColor: "var(--browser-chrome-bg)",
};

const toolbar = {
  display: "flex",
  alignItems: "center",
  padding: "8px 12px",
  backgroundColor: "var(--browser-toolbar-bg)",
  borderBottom: "1px solid var(--glass-border)",
};

const trafficLights = {
  display: "flex",
  gap: "6px",
  flexShrink: 0,
  width: "48px",
};

const trafficLightsSpacer = {
  width: "48px",
  flexShrink: 0,
};

const dot = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
};

const urlBar = {
  flex: 1,
  textAlign: "center",
  fontSize: "11px",
  color: "var(--browser-url-color)",
  backgroundColor: "var(--browser-url-bg)",
  borderRadius: "4px",
  padding: "3px 8px",
  fontFamily: "'Inter', sans-serif",
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const img = {
  display: "block",
  width: "100%",
};

export default ProjectImg;
