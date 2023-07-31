import React from "react";
import "../../styles/Header/Header.css";
import AnchorLinks from "./AnchorLinks";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <div className="header-container">
      <AnchorLinks />
      <ThemeToggler />
    </div>
  );
}

export default Header;
