import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


const ProjectsPage = () => {
    return (
        <div className='ProjectsPage'>
            <div id="ProjectsHeading">
                <Zoom>
                    <h1>Projects</h1>
                </Zoom>
            </div>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                    <MouseParallaxChild factorX={0.1} factorY={0.1}>
            <div class='Projects'>
                <a href="https://github.com/shinymcshine09/my-app.git" target="_blank" rel="noopener noreferrer">
                    <div className="Website">
                        <Zoom>
                        <div id="WebsiteImage">
                            <img src={require('../images/coding.png')} alt="WebsiteIcon"/>
                        </div>
                        <h4 id="ProjectID">My Website Code</h4>
                        </Zoom>
                        <br />
                    </div>
                </a>

                <a href="https://github.com/shinymcshine09/SnakeGame.git" target="_blank" rel="noopener noreferrer">
                    <div class='Snake'>
                        <Zoom>
                        <div id='SnakeImage'>
                            <img src={require('../images/snakehead.png')} alt="SnakeHead"/>
                        </div>
                        <h4 id="ProjectID">Java Snake Game</h4>
                        </Zoom>
                        <br />
                    </div>
                </a>
                <a href="https://github.com/shinymcshine09/Currency-Converter.git" target="_blank" rel="noopener noreferrer">
                    <div class='Currency'>
                        <Zoom>
                        <div id="CurrencyImage">
                            <img src={require("../images/134164_money_exchange_cash_currency_icon.png")} alt="CurrencyImg"/>
                        </div>
                        <h4 id="ProjectID">Currency Converter</h4>
                        </Zoom>
                        <br />
                    </div>
                </a>
            </div>
            </MouseParallaxChild>
                </MouseParallaxContainer>
        </div>
    )
}

export default ProjectsPage