import React from 'react';
import { useLocation } from 'react-router-dom';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import styled, { css } from 'styled-components';
import { InView } from 'react-intersection-observer';

import Heading from './styledcomponents/HeadingStyle';
import FadeUp from './csseffects/FadeUp';
import FadeIn from './csseffects/FadeIn';
import LittleWiggle from './csseffects/LittleWiggle';
import ChevronDownIcon from './icons/ChevronDownIcon';

const ProjectsPage = () => {
    const location = useLocation();

    const ProjectsContent = styled.div`
        text-align: center;
        background-color: rgb(49, 49, 49);
        height: 100vh;
        width: 100vw;
    `

    const Portfolio = styled.div`
        margin-left: 1rem;
        margin-right: 1rem;
        display: flex;
        flex: 1;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        height: 80vh;
        margin-top: 1rem;
        @media screen and (max-width: 569px) and (orientation:portrait){
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    `

    const ImageContainer = styled.div`
        margin: 1rem;
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
        max-width: 26rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition: all 1s;
        &:hover {
            border: 5px solid rgb(27, 27, 27);
            background-color: rgb(37, 37, 37);
            animation: ${LittleWiggle} 0.3s infinite;
        }
    `

    const Links = styled.a`
        opacity: 0;
        text-decoration: none;
        @media screen and (max-width: 569px) and (orientation:portrait){
            /* max-width: 95%; */
        }
        ${p => p.inView && location.pathname === '/' && css`
            animation: ${FadeUp} 2s forwards;
        `}
        ${location.pathname === '/projects' && css`
            animation: ${FadeIn} 2s forwards;
        `}
    `

    const DescriptionContainer = styled.div`
        border-top: 2px rgb(27, 27, 27) solid;
        padding-top: 1rem;
        text-align: center;
        max-height: 2rem;
        min-height: 2rem;
        @media screen and (max-width: 569px) and (orientation:portrait){
            display: none;
        }
    `

    const ProjectTitle = styled.h4`
        color: orange;
    `

    const Description = styled.text`
        padding: 1rem;
        font-size: .8rem;
    `

    return (
        <InView triggerOnce>
            {({ inView, ref }) => (
                <ProjectsContent>
                    <div>
                        <Heading location={location} ref={ref} inView={inView}>Projects</Heading>
                    </div>
                    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <Portfolio>
                                <Links 
                                    ref={ref} 
                                    inView={inView} 
                                    href="https://github.com/shinymcshine09/my-website.git" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Project>
                                        <ImageContainer>
                                            <Image src={require('../images/coding.png')} alt="WebsiteIcon"/>
                                        </ImageContainer>
                                        <ProjectTitle 
                                            id="project-id"
                                        >
                                            My Website Code
                                        </ProjectTitle>
                                        <DescriptionContainer>
                                            <Description>This website's code, written in react by Me</Description>
                                        </DescriptionContainer>
                                        <br />
                                    </Project>
                                </Links>
                                <Links 
                                    ref={ref} 
                                    inView={inView} 
                                    href="https://github.com/shinymcshine09/SnakeGame.git" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Project>
                                        <ImageContainer>
                                            <Image src={require('../images/snakehead.png')} alt="SnakeHead"/>
                                        </ImageContainer>
                                        <ProjectTitle id="project-id">Java Snake Game</ProjectTitle>
                                        <DescriptionContainer>
                                            <Description>A version of Nokia's game Snake, written in Java</Description>
                                        </DescriptionContainer>
                                        <br />
                                    </Project>
                                </Links>
                                <Links ref={ref} inView={inView} href="https://github.com/shinymcshine09/Currency-Converter.git" target="_blank" rel="noopener noreferrer">
                                    <Project>
                                        <ImageContainer id='kid'>
                                            <Image src={require("../images/134164_money_exchange_cash_currency_icon.png")} alt="CurrencyImg"/>
                                        </ImageContainer>
                                        <ProjectTitle id="project-id">Currency Converter</ProjectTitle>
                                        <DescriptionContainer>
                                            <Description>A web scraper with a graphical user interface</Description>
                                        </DescriptionContainer>
                                        <br />
                                    </Project>
                                </Links>
                            </Portfolio>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                </ProjectsContent>
            )}
        </InView>
    )
}

export default ProjectsPage