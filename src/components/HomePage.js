import React from "react";
import Zoom from 'react-reveal/Zoom';
import Typewriter from 'typewriter-effect';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const HomePage = () => {
    return (
        <>
            <body class='HomeContent'>
                <MouseParallaxContainer globalFactorX={0.2} globalFactorY={0.2}>
                    <MouseParallaxChild factorX={0.2} factorY={0.2}>
                    <div className="HomeCircle">
                        <img src={require("../images/mesquare.tiff")} alt="James"/>
                    </div>
                    </MouseParallaxChild>
                </MouseParallaxContainer>
                {/* <Zoom>
                <div id="PageTitle">
                    <h1>James Hart</h1>
                </div>
                </Zoom> */}
                <div id='typing-home'>
                    <Typewriter
                        options={{
                            strings: ['Hello!', 'My name is James Hart', 'Welcome to my first website!', 'I hope you enjoy your visit'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </body>
        </>
    )
}

export default HomePage;