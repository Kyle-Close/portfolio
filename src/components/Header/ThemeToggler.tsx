import React from "react";
import "../../styles/Header/ThemeToggler.css";

interface HeaderProps {
  handleThemeToggle: () => void;
  darkMode: boolean;
}

function ThemeToggler({ handleThemeToggle, darkMode }: HeaderProps) {
  return (
    <button
      className="theme-toggle"
      onClick={handleThemeToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="moon-mask">
            <rect x="0" y="0" width="24" height="24" fill="white" />
            <circle className="moon-mask" cx="15" cy="9" r="6" fill="black" />
          </mask>
        </defs>

        {/* Sun body / moon crescent */}
        <circle
          className="sun-body"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
        />

        {/* Sun rays */}
        <g className="sun-rays">
          <line x1="12" y1="1" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="23" />
          <line x1="1" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
}

export default React.memo(ThemeToggler);
