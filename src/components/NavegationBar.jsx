import React from "react";

import "./NavegationBar.css";
import DarkMode from "./DarkMode";

const NavegationBar = () => {
  return (
    <header>
      <nav className="app_nav">
        <h1>ZenTask</h1>
        <ul>
          <p>Productividad con tranquilidad</p>
          <li>
            <DarkMode />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavegationBar;
