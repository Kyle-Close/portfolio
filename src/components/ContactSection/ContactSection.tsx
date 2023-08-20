import ContactTitleSection from "./ContactTitleSection";
import { Box, Typography, TextField } from "@mui/material";

function ContactSection() {
  return (
    <Box>
      <ContactTitleSection />
      <Typography variant="body1">
        Get in touch! Whether it's an opportunity or just to chat.
      </Typography>
      <Box component="form" sx={form} noValidate>
        <TextField
          sx={nameEmail}
          id="name"
          label="Name"
          variant="outlined"
          size="small"
        />
        <TextField
          sx={nameEmail}
          id="your-email"
          label="Your Email"
          variant="outlined"
          size="small"
        />
        <TextField
          size="small"
          id="message"
          label="Message"
          multiline
          rows={6}
          variant="filled"
        />
      </Box>
    </Box>
  );
}

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  margin: "20px 0",
};

const nameEmail = {
  maxWidth: {
    sm: "70%",
    md: "55%",
    lg: "50%",
  },
};

export default ContactSection;
