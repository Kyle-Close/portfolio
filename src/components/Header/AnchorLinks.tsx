import Link from "@mui/material/Link";
import "../../styles/Header/AnchorLinks.css";

function AnchorLinks() {
  return (
    <div className="anchor-links-container">
      <Link href="#">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </div>
  );
}

export default AnchorLinks;
