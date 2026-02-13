import ContactTitleSection from "./ContactTitleSection";
import { Box, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const FORMSPREE_URL = "https://formspree.io/f/xwvnlqwp";

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

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      background: "var(--glass-bg)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderRadius: "12px",
      transition: "var(--glass-transition)",
      "& fieldset": {
        borderColor: "var(--glass-border)",
        transition: "border-color 0.25s ease",
      },
      "&:hover fieldset": {
        borderColor: "var(--glass-border-hover)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--accent)",
        boxShadow: "var(--accent-glow)",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "var(--accent)",
    },
  };

  if (submitStatus === "submitted") {
    return (
      <Box id="contact">
        <ContactTitleSection />
        <Alert severity="success" sx={{ mt: 2, borderRadius: "12px" }}>
          Thanks for reaching out! I'll get back to you soon.
        </Alert>
      </Box>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box id="contact">
        <ContactTitleSection />

        <Box sx={glassCard}>
          <Typography variant="body1" sx={{ opacity: 0.85, mb: 2 }}>
            Get in touch! Whether it's an opportunity or just to chat.
          </Typography>

          {submitStatus === "error" && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: "12px" }}>
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
            {/* Name & Email side by side on sm+ */}
            <Box sx={nameEmailRow}>
              <TextField
                sx={{ ...nameEmailField, ...inputSx }}
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
                sx={{ ...nameEmailField, ...inputSx }}
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
            </Box>

            <TextField
              sx={inputSx}
              size="small"
              id="message"
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              required
              value={formData.message}
              disabled={submitStatus === "submitting"}
              {...(messageError ? { error: true, helperText: messageError } : {})}
            />

            <Box sx={{ display: "flex", justifyContent: { xs: "stretch", sm: "flex-end" } }}>
              <Button
                type="submit"
                variant="contained"
                disabled={submitStatus === "submitting"}
                startIcon={submitStatus === "submitting" ? <CircularProgress size={18} color="inherit" /> : null}
                sx={submitButton}
              >
                {submitStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

const glassCard = {
  background: "var(--glass-bg)",
  backdropFilter: "blur(var(--glass-blur))",
  WebkitBackdropFilter: "blur(var(--glass-blur))",
  border: "1px solid var(--glass-border)",
  borderRadius: "var(--glass-radius)",
  boxShadow: "var(--glass-shadow)",
  padding: {
    xs: "14px 12px",
    sm: "24px 24px",
    md: "32px 36px",
  },
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: {
    xs: "14px",
    sm: "20px",
  },
};

const nameEmailRow = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  gap: {
    xs: "14px",
    sm: "16px",
  },
};

const nameEmailField = {
  flex: 1,
};

const submitButton = {
  background: "linear-gradient(135deg, var(--accent), #7c6bff)",
  borderRadius: "12px",
  padding: {
    xs: "10px 24px",
    sm: "10px 36px",
  },
  width: {
    xs: "100%",
    sm: "auto",
  },
  fontWeight: 600,
  fontSize: "0.95rem",
  textTransform: "none" as const,
  letterSpacing: "0.3px",
  boxShadow: "var(--accent-glow)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(135deg, var(--accent), #7c6bff)",
    boxShadow: "var(--accent-glow-strong)",
    transform: "translateY(-1px)",
  },
};

export default ContactSection;
