import { Box, ButtonBase, Typography } from "@mui/material";

import linkedIn from "../../img/linkedin.svg";
import gitHub from "../../img/github.svg";

function ContactTitleSection() {
  return (
    <Box sx={titleContainer}>
      <Typography variant="h3">Contact</Typography>
      <ButtonBase
        href="https://www.linkedin.com/in/kyle-close/"
        target="_blank"
        sx={linkedinButton}
      >
        <img src={linkedIn} style={{ width: "100%" }} />
      </ButtonBase>
      <ButtonBase
        href="https://github.com/Kyle-Close"
        target="_blank"
        sx={githubButton}
      >
        <img src={gitHub} style={{ width: "100%" }} />
      </ButtonBase>
    </Box>
  );
}

const titleContainer = {
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const linkedinButton = {
  width: "35px",
};

const githubButton = {
  width: "25px",
};

export default ContactTitleSection;
