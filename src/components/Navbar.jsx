import "../style/navbar.css"

import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="navbar_container">
      <div className="navbar_left">
        <a href="#home"><span>AMIT</span></a>
        <span className="navbar_left_dot">.</span>
      </div>

      <div className="navbar_right">
        <a href="#about"><span>ABOUT</span></a>
        <a href="#contact"><span>CONTACT</span></a>
        <a href="#service"><span>SERVICE</span></a>
        <a href="#whyus"><span>WHY US</span></a>
      </div>
    </nav>
  );
}
