import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={footerContainer}>
      <Box sx={divider}></Box>
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            sm: "14px",
            md: "15px",
          },
          textAlign: "center",
          opacity: 0.7,
          padding: "16px 0",
        }}
        variant="body1"
      >
        © 2025 | Designed & built by Kyle Close
      </Typography>
    </Box>
  );
}

const footerContainer = {
  marginTop: "20px",
};

const divider = {
  width: "100%",
  height: "1px",
  background: "linear-gradient(90deg, transparent, var(--glass-border), transparent)",
};

export default Footer;
