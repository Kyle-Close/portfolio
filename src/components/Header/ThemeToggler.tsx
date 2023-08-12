import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import { useTheme } from "@mui/material/styles";
import SwitchUnstyled from "@mui/material/Switch";

interface HeaderProps {
  handleThemeToggle: () => void;
  darkMode: boolean;
}

function ThemeToggler({ handleThemeToggle, darkMode }: HeaderProps) {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(darkMode);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);

    // Delay the theme change just enough for the animation to complete.
    setTimeout(() => {
      handleThemeToggle();
    }, 300); // Assuming your animation takes less than 300ms. Adjust accordingly.
  };

  return (
    <FormGroup>
      <Switch sx={{ mt: -1 }} checked={isDarkMode} onChange={handleToggle} />
    </FormGroup>
  );
}

export default React.memo(ThemeToggler);
