import ContactTitleSection from "./ContactTitleSection";
import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";

const initFormData = {
  name: "",
  yourEmail: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] = React.useState(initFormData);

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Submitting...");
  }

  function onFormChange(event: any) {
    const name = event.target.id;
    const id = event.target.value;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: id,
      };
    });
  }

  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Box>
      <ContactTitleSection />
      <Typography variant="body1">
        Get in touch! Whether it's an opportunity or just to chat.
      </Typography>
      <Box
        component="form"
        sx={form}
        noValidate
        onChange={onFormChange}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={nameEmail}
          id="name"
          label="Name"
          variant="outlined"
          size="small"
        />
        <TextField
          sx={nameEmail}
          id="yourEmail"
          type="email"
          label="Your Email"
          variant="outlined"
          size="small"
          required
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
      <Button type="submit">Submit</Button>
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
