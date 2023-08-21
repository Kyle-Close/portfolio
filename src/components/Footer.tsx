import { Typography } from "@mui/material";

function Footer() {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: "12px",
          sm: "14px",
          md: "15px",
        },
        textAlign: "center",
      }}
      variant="body1"
    >
      © 2023 | Designed & built by Kyle Close
    </Typography>
  );
}

export default Footer;
