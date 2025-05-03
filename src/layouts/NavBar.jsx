import { Fragment, useState, useEffect } from "react";
export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, []);

  return (
    <nav className=" w-75 mx-auto d-flex justify-content-between align-items-center">
      <div className="navBar">
        <span className={`navName ${isOpen ? "show" : ""}`}>
          Andrej Maksimovic
        </span>
        <ul className={`navLink ${isOpen ? "show" : ""}`}>
          <li>
            <a href="/#about" className="navItem">
              ABOUT
            </a>
          </li>
          <li>
          <a href="/#experience" className="navItem">
          EXPERIENCE
            </a>
          </li>
          <li>
          <a href="/#projects" className="navItem">
          PROJECTS
            </a>
          </li>
          <li>
          <a href="/#contact" className="navItem">
          CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`burgerMenu ${isOpen ? "open" : ""}`}
        onClick={toggleOpen}
      >
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
