import React from "react";
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
    gap: "8px",
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
      xs: "6px 8px",
      sm: "8px 16px",
      md: "10px 24px",
    },
    borderRadius: {
      xs: "10px",
      sm: "var(--glass-radius)",
    },
    marginTop: {
      xs: "4px",
      sm: "8px",
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
