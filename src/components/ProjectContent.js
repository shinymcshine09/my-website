import React from 'react'
import Zoom from 'react-reveal/Zoom';

const ProjectContent = () => {
    return (
        <body class='ProjectContent'>
            <Zoom>
                <div id="PageTitle">
                    <h3>Projects</h3>
                </div>
            </Zoom>
            <div class='Projects'>
                <a href="https://github.com/shinymcshine09/SnakeGame.git" target="_blank" rel="noreferrer">
                <div class='Snake'>
                    <Zoom>
                    <div id='SnakeImage'>
                        <img src={require('../images/snakehead.tiff')} alt="SnakeHead"/>
                    </div>
                    <h5 id="ProjectID">Java Snake Game</h5>
                    </Zoom>
                </div>
                </a>
                <a href="https://github.com/shinymcshine09/Currency-Converter" target="_blank" rel="noreferrer">
                <div class='Currency'>
                    <Zoom>
                    <div id="CurrencyImage">
                        <img src={require("../images/134164_money_exchange_cash_currency_icon.png")} alt="CurrencyImg"/>
                    </div>
                    <h5 id="ProjectID">Currency Converter</h5>
                    </Zoom>
                </div>
                </a>
                <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                <div className="Website">
                    <Zoom>
                    <div id="WebsiteImage">
                        <img src={require('../images/coding.png')} alt="WebsiteIcon"/>
                    </div>
                    <h5 id="ProjectID">Code for this Website</h5>
                    </Zoom>
                </div>
                </a>
            </div>
        </body>
    )
}

export default ProjectContent