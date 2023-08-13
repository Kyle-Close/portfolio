import React from "react";
import "../../styles/Header/Header.css";
import AnchorLinks from "./AnchorLinks";
import ThemeToggler from "./ThemeToggler";
import { Box } from "@mui/material";

interface HeaderProps {
  handleThemeToggle: () => void;
  darkMode: boolean;
}

function Header({ handleThemeToggle, darkMode }: HeaderProps) {
  const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    height: "100%",
    position: "sticky",
    top: "0",
    zIndex: "1",
    backgroundColor: darkMode ? `hsl(230, 17%, 14%)` : "hsl(0, 0%, 100%)",
    padding: {
      xs: "5px 0",
      sm: "5px 0",
      md: "10px 0",
    },
  };

  return (
    <Box sx={headerContainer}>
      <AnchorLinks />
      <ThemeToggler handleThemeToggle={handleThemeToggle} darkMode={darkMode} />
    </Box>
  );
}

export default React.memo(Header);
