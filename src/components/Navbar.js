import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isNavExpanded === true && ref2.current && !ref2.current.contains(event.target)) {
        setIsNavExpanded(!isNavExpanded);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  },
  );

  return (
    <nav class="HeaderContent">
      <ul class="Navbar"> 
        <li>
          <text class="Name">
            James Hart
          </text>
        </li>
        <button 
          ref={ref}
          className={
            isNavExpanded ? "clicked-hamburger" : "hamburger"
          }
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img src={require('../images/hamburger_black.png')} alt="hamburger-icon" />
        </button>
        <div
          ref={ref2}
          className={
            (isNavExpanded && windowWidth < 570) ? "nav-expanded" : "wide-nav"
          }
        >
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;