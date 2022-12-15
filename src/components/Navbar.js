import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav class="HeaderContent">
        <ul class="Navbar"> 
          <li>
            <text class="Name">
              James Hart
            </text>
          </li>
          <div className='links'>
            <li>
              <Link className="HomeLink" to="/" exact>Home</Link>
            </li>
            <li>
              <Link className="ProjectsLink" to="/projects">Projects</Link>
            </li>
            <li>
              <Link className="AboutLink" to="/about">About</Link>
            </li>
            <li>
              <Link className="ContactLink" to="/contact">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    )
}

export default Navbar;