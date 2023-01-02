import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import styled, { keyframes } from 'styled-components';

import Heading from './styledcomponents/HeaderStyle';

const ProjectsPage = () => {
    const tiltShaking = keyframes`
        0% { transform: rotate(0deg); }
        25% { transform: rotate(2deg); }
        50% { transform: rotate(0eg); }
        75% { transform: rotate(-2deg); }
        100% { transform: rotate(0deg); }
    `

    const ProjectsContent = styled.div`
        text-align: center;
        background-color: rgb(49, 49, 49);
        height: 100vh;
        width: 100vw;
    `

    const Portfolio = styled.div`
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        height: fit-content;
        padding-bottom: 4rem;
        @media screen and (max-width: 569px) and (orientation:portrait){
            flex-wrap: wrap;
            overflow: auto;
        }
    `

    const Image = styled.img`
        width: 100%;
        height: 100%;
        &:hover {
            filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.50));
        }
    `

    const Project = styled.div`
        background-color: rgb(49, 49, 49);
        border: 5px solid rgb(36, 36, 36);
        border-radius: 1.5rem;
        margin: 1rem;
        max-width: 26rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition: all 1s;
        &:hover {
            border: 5px solid rgb(27, 27, 27);
            background-color: rgb(37, 37, 37);
            animation: ${tiltShaking} 0.3s infinite;
        }
        &#project-id {
            text-decoration: none;
        }
    `

    const ImageContainer = styled.div`
        margin: 1rem;
    `

    const Links = styled.a`
        @media screen and (max-width: 569px) and (orientation:portrait){
            flex: 40%;
            max-width: 40%;
        }
    `

    return (
        <ProjectsContent>
            <div>
                <Zoom>
                    <Heading>Projects</Heading>
                </Zoom>
            </div>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <MouseParallaxChild factorX={0.1} factorY={0.1}>
                    <Portfolio>
                        <Links href="https://github.com/shinymcshine09/my-app.git" target="_blank" rel="noopener noreferrer">
                            <Project>
                                <Zoom>
                                <ImageContainer>
                                    <Image src={require('../images/coding.png')} alt="WebsiteIcon"/>
                                </ImageContainer>
                                <h4 id="project-id">My Website Code</h4>
                                </Zoom>
                                <br />
                            </Project>
                        </Links>

                        <Links href="https://github.com/shinymcshine09/SnakeGame.git" target="_blank" rel="noopener noreferrer">
                            <Project>
                                <Zoom>
                                <ImageContainer>
                                    <Image src={require('../images/snakehead.png')} alt="SnakeHead"/>
                                </ImageContainer>
                                <h4 id="project-id">Java Snake Game</h4>
                                </Zoom>
                                <br />
                            </Project>
                        </Links>
                        <Links href="https://github.com/shinymcshine09/Currency-Converter.git" target="_blank" rel="noopener noreferrer">
                            <Project>
                                <Zoom>
                                <ImageContainer>
                                    <Image src={require("../images/134164_money_exchange_cash_currency_icon.png")} alt="CurrencyImg"/>
                                </ImageContainer>
                                <h4 id="project-id">Currency Converter</h4>
                                </Zoom>
                                <br />
                            </Project>
                        </Links>
                    </Portfolio>
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </ProjectsContent>
    )
}

export default ProjectsPage