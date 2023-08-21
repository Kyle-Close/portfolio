import ContactTitleSection from "./ContactTitleSection";
import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";

const initFormData = {
  name: "",
  yourEmail: "",
  message: "",
};

const initValidInputs = {
  name: true,
  yourEmail: true,
  message: true,
};

function ContactSection() {
  const [formData, setFormData] = React.useState(initFormData);
  const [isValidInputs, setIsValidInputs] = React.useState(initValidInputs);

  function handleSubmit(event: any) {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form is valid");
    }
  }

  function validateForm() {
    const isValidName = validateName(formData.name);
    const isValidEmail = validateEmail(formData.yourEmail);
    const isValidMessage = validateMessage(formData.message);

    let isFormValid = false;

    if (isValidName && isValidEmail && isValidMessage) {
      isFormValid = true;
      setIsValidInputs(() => {
        return {
          name: true,
          yourEmail: true,
          message: true,
        };
      });
    } else {
      setIsValidInputs(() => {
        return {
          name: isValidName,
          yourEmail: isValidEmail,
          message: isValidMessage,
        };
      });
    }

    return isFormValid;
  }

  function validateName(name: string): boolean {
    let isValid = true;

    const isEmpty = name.length < 1 ? true : false;
    const isRegexPass = /^[A-Za-z ]{1,30}$/.test(name);

    if (isEmpty || !isRegexPass) isValid = false;

    return isValid;
  }

  function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  function validateMessage(message: string): boolean {
    const isValidLength = message.length > 0 ? true : false;
    return isValidLength;
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

  const nameError = isValidInputs.name
    ? null
    : "Must contain only letters & spaces";
  const emailError = isValidInputs.yourEmail ? null : "Must be a valid email";
  const messageError = isValidInputs.message ? null : "Cannot be blank";

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
          required
          {...(nameError ? { error: true, helperText: nameError } : {})}
        />
        <TextField
          sx={nameEmail}
          id="yourEmail"
          type="email"
          label="Your Email"
          variant="outlined"
          size="small"
          required
          {...(emailError ? { error: true, helperText: emailError } : {})}
        />
        <TextField
          size="small"
          id="message"
          label="Message"
          multiline
          rows={6}
          variant="outlined"
          required
          {...(messageError ? { error: true, helperText: messageError } : {})}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
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
