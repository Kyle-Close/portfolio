import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer container mono">
      <p>
        <span className="tok-comment">// © 2026 Kyle Close — designed & built with React + TypeScript</span>
      </p>
      <a href="#home" className="site-footer-top">
        cd ~ <span aria-hidden>↑</span>
      </a>
    </footer>
  );
}

export default Footer;
