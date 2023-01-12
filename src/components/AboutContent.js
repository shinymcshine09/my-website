import React from 'react'
import Zoom from 'react-reveal/Zoom';

const AboutContent = () => {
    return (
        <body class='AboutContent'>
            <Zoom>
            <div id="PageTitle">
                <h3>About Me</h3>
            </div>
            </Zoom>
            <div className='AboutCircle'>
                <Zoom>
                    <img src={require("../images/mesquare.tiff")} alt="James"/>
                </Zoom>
            </div>
            
            <p>
                I have a passion for solving coding problems. I am an Open University Student
                currently studying Computer Science looking to get into the IT industry.
            </p>
            
            <p>
            In my spare time I have been coding personal projects, including this website.
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
    )
}

export default AboutContent