import React from "react";
import "../../styles/Header/Header.css";
import AnchorLinks from "./AnchorLinks";
import ThemeToggler from "./ThemeToggler";

interface HeaderProps {
  handleThemeToggle: () => void;
}

function Header({ handleThemeToggle }: HeaderProps) {
  return (
    <div className="header-container">
      <AnchorLinks />
      <ThemeToggler handleThemeToggle={handleThemeToggle} />
    </div>
  );
}

export default Header;
