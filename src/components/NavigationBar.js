import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <ul class="Navbar"> 
            <li>
                <text class="Name">
                    James Hart
                </text>
            </li>
            <li>
            {/* Endpoint to route to Home component */}
                <Link to="/">Home</Link>
            </li>
            <li>
            {/* Endpoint to route to Contact Us component */}
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
            {/* Endpoint to route to About component */}
                <Link to="/About">About</Link>
            </li>
            <li>
            {/* Endpoint to route to Contact Us component */}
                <Link to="/ContactMe">Contact</Link>
            </li>
        </ul>
    )
}

export default NavigationBar