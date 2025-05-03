import { Fragment } from "react";
export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div className="footer py-5">
          <ul>
            <li>
              <a href="/#about" >ABOUT</a>
            </li>
            <li>
              <a href="/#experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="/#projects">PROJECTS</a>
            </li>
            <li>
              <a href="/#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <p>Copyright © 2025 Andrej Maksimovic. All Rights Reserved</p>
        </div>
      </footer>
    </Fragment>
  );
}
