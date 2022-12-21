import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="website-id">
                <p>Website created in React</p>
                <p>Made by James Hart</p>
            </div>
            <ul className="Sitemap">
                <li>
                    <Link to="/" exact>Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;