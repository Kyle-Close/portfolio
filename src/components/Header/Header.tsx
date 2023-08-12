import React from "react";
import "../../styles/Header/Header.css";
import AnchorLinks from "./AnchorLinks";
import ThemeToggler from "./ThemeToggler";

interface HeaderProps {
  handleThemeToggle: () => void;
  darkMode: boolean;
}

function Header({ handleThemeToggle, darkMode }: HeaderProps) {
  return (
    <div className="header-container">
      <AnchorLinks />
      <ThemeToggler handleThemeToggle={handleThemeToggle} darkMode={darkMode} />
    </div>
  );
}

export default React.memo(Header);
