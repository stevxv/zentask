import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img src="/icon-white.png" alt="zentask-logo" />
        <p>ZenTask</p>
      </div>
      <a href="https://github.com/stevxv/zentask" target="_blank">
        <img src="/github-icon.svg" alt="github-icon" />
      </a>
    </footer>
  );
};

export default Footer;
