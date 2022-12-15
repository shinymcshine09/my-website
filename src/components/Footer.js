import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="website-id">
                <p>Website created by James Hart</p>
                <a href="mailto:js.hart@hotmail.com">email: js.hart@hotmail.com</a>
            </div>
            <ul className="Sitemap">
                {/* <li>
                    <h4>Sitemap:</h4>
                </li> */}
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