import { useState } from "react";
import "./Navbar.css";
import hamburgerIcon from "./assets/hamburger.svg";
import x from "./assets/x.svg";
import "./Hero.css";
function Navbar() {
  const [toggleHam, hamState] = useState(true);
  const navlinks = [
    { id: 1, title: "home", link: "#home" },
    { id: 2, title: "projects", link: "#home" },
    { id: 3, title: "contact", link: "#home" },
    { id: 4, title: "other", link: "#home" },
  ];

  return (
    <header className="navbar">
      <a className="anchor" href="./">
        Salem Beck
      </a>
      <button
        className="hamburgerbtn"
        type="button"
        onClick={() => hamState((prev) => !prev)}
        aria-label={toggleHam ? "open menu" : "close menu"}
      >
        <img
          className="hamburger"
          src={toggleHam ? hamburgerIcon : x}
          alt="toggle"
        />
      </button>

      <nav className={`navlink ${toggleHam ? "hidden" : "visible"}`}>
        <ul className="linklist">
          {navlinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
