import ContactTitleSection from "./ContactTitleSection";
import { Box, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React from "react";

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

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

type SubmitStatus = "idle" | "submitting" | "submitted" | "error";

function ContactSection() {
  const [formData, setFormData] = React.useState(initFormData);
  const [isValidInputs, setIsValidInputs] = React.useState(initValidInputs);
  const [submitStatus, setSubmitStatus] = React.useState<SubmitStatus>("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.yourEmail,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitStatus("submitted");
        setFormData(initFormData);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
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

  function onFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.target.id;
    const id = event.target.value;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: id,
      };
    });
    if (submitStatus === "error") setSubmitStatus("idle");
  }

  const nameError = isValidInputs.name
    ? null
    : "Must contain only letters & spaces";
  const emailError = isValidInputs.yourEmail ? null : "Must be a valid email";
  const messageError = isValidInputs.message ? null : "Cannot be blank";

  if (submitStatus === "submitted") {
    return (
      <Box id="contact">
        <ContactTitleSection />
        <Alert severity="success" sx={{ mt: 2 }}>
          Thanks for reaching out! I'll get back to you soon.
        </Alert>
      </Box>
    );
  }

  return (
    <Box id="contact">
      <ContactTitleSection />
      <Typography variant="body1">
        Get in touch! Whether it's an opportunity or just to chat.
      </Typography>
      {submitStatus === "error" && (
        <Alert severity="error" sx={{ mt: 1 }}>
          Something went wrong. Please try again.
        </Alert>
      )}
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
          value={formData.name}
          disabled={submitStatus === "submitting"}
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
          value={formData.yourEmail}
          disabled={submitStatus === "submitting"}
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
          value={formData.message}
          disabled={submitStatus === "submitting"}
          {...(messageError ? { error: true, helperText: messageError } : {})}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={submitStatus === "submitting"}
          startIcon={submitStatus === "submitting" ? <CircularProgress size={20} color="inherit" /> : null}
        >
          {submitStatus === "submitting" ? "Sending..." : "Submit"}
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
