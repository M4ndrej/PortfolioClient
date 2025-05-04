import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle open and closed state for the menu
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-75 mx-auto d-flex justify-content-between align-items-center">
      <div className="navBar">
        <span className={`navName ${isOpen ? "show" : ""}`}>
          Andrej Maksimovic
        </span>
        <ul className={`navLink ${isOpen ? "show" : ""}`}>
          <li>
            <a href="/#about" className="navItem" onClick={closeMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="/#experience" className="navItem" onClick={closeMenu}>
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="/#projects" className="navItem" onClick={closeMenu}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="/#contact" className="navItem" onClick={closeMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`burgerMenu ${isOpen ? "open" : ""}`}
        onClick={toggleOpen} // Call toggleOpen function to toggle the state
      >
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
