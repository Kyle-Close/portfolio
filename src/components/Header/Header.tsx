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
    position: "sticky",
    top: "0",
    zIndex: 10,
    background: "var(--glass-bg)",
    backdropFilter: "blur(var(--glass-blur))",
    WebkitBackdropFilter: "blur(var(--glass-blur))",
    border: "1px solid var(--glass-border)",
    boxShadow: "var(--glass-shadow)",
    transition: "var(--glass-transition)",
    padding: {
      xs: "10px 16px",
      sm: "10px 20px",
      md: "12px 24px",
    },
    borderRadius: "var(--glass-radius)",
    marginTop: "8px",
  };

  return (
    <Box sx={headerContainer}>
      <AnchorLinks />
      <ThemeToggler handleThemeToggle={handleThemeToggle} darkMode={darkMode} />
    </Box>
  );
}

export default React.memo(Header);
