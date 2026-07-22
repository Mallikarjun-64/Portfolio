import { useState, useEffect } from "react";
import "./index.css";
import SideBar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <main>
        <SideBar />
        <div className="main-content">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          {activeSection === "About" && <About />}
          {activeSection === "Skills" && <Skills />}
          {activeSection === "Projects" && <Projects />}
          {activeSection === "Achievements" && <Achievements />}
          {activeSection === "Contact" && <Contact />}
        </div>
      </main>
    </>
  );
}

export default App;
