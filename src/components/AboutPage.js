import React from "react";
import Zoom from 'react-reveal/Zoom';

const AboutPage = () => {
    return (
        <div class='AboutContent'>
            <Zoom>
            <div id="PageTitle">
                <h1>About Me</h1>
            </div>
            </Zoom>
            {/* <div className='AboutCircle'>
                <Zoom>
                    <img src={require("../images/mesquare.tiff")} alt="James"/>
                </Zoom>
            </div> */}
            <body id="ContentBody">
                <p>
                    I have a passion for solving coding problems. I am an Open University Student
                    currently studying Computer Science looking to get into the IT industry.
                </p>
                <br/>
                <p>
                    In my spare time I am constantly coding and learning new things. One of the things
                    I have been coding is this website.
                </p>
            
                <br/>
                <div class='Skills'>
                    <h4>Skills</h4>
                    <ol>
                        <li>Java</li>
                        <li>HTML/CSS/React</li>
                        <li>Python</li>
                        <li>CISCO Networking Essentials</li>
                        <li>Linux</li>
                    </ol>
                </div>
            </body>
        </div>
    )
}

export default AboutPage;