import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={
              activeSection === "About" ? " navbar-link active" : "navbar-link"
            }
            onClick={() => setActiveSection("About")}
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Skills" ? " navbar-link active" : "navbar-link"
            }
            onClick={() => setActiveSection("Skills")}
          >
            Skills
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Projects"
                ? " navbar-link active"
                : "navbar-link"
            }
            onClick={() => setActiveSection("Projects")}
          >
            Projects
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Achievements"
                ? " navbar-link active"
                : "navbar-link"
            }
            onClick={() => setActiveSection("Achievements")}
          >
            Achieve
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={
              activeSection === "Contact"
                ? " navbar-link active"
                : "navbar-link"
            }
            onClick={() => setActiveSection("Contact")}
          >
            Contact
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" onClick={toggleTheme}>
            {theme === "light" ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
