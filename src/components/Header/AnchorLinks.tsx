import React from "react";
import Link from "@mui/material/Link";
import "../../styles/Header/AnchorLinks.css";

function AnchorLinks() {
  return (
    <div className="anchor-links-container">
      <Link href="#">Home</Link>
      <Link href="#">About</Link>
      <Link href="#">Projects</Link>
      <Link href="#">Contact</Link>
    </div>
  );
}

export default AnchorLinks;
