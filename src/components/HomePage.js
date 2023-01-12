import React, { useState } from "react";
import styled, { keyframes, css } from 'styled-components';

import portrait from '../images/portraitwithbkgr.png';

import FadeIn from "./styledcomponents/FadeIn";
import FadeUp from "./styledcomponents/FadeUp";

const ManageName = ({NameHeading}) => {
    const [ isHoveringName, setIsHoveringName ] = useState(false);
    const [ name, setName ] = useState("JH");

    const handleMouseOverName = () => {
        setIsHoveringName(true);
        setName('James Hart');
     };
 
     const handleMouseOutName = () => {
         setIsHoveringName(false);
         setName("JH")
     };

    return (
        <div onMouseOver={handleMouseOverName} 
            onMouseOut={handleMouseOutName}>
            <NameHeading length={name.length}
                className={isHoveringName ? 'full-name' : 'initials'}> 
                    {name}
            </NameHeading>
        </div>
    )
}

const ManageTitle = ({Title}) => {
    const [ isHoveringTitle, setIsHoveringTitle ] = useState(false);
    const [ title, setTitle ] = useState("AJWD");

    const handleMouseOverTitle = () => {
        setIsHoveringTitle(true);
        setTitle('Aspiring Junior Web Developer');
    };

    const handleMouseOutTitle = () => {
        setIsHoveringTitle(false);
        setTitle('AJWD');
    };

    return (
        <div onMouseOver={handleMouseOverTitle} 
            onMouseOut={handleMouseOutTitle}>
            <Title length={title.length}
                className={isHoveringTitle ? 'full-subtitle' : 'anagram'}>
                    {title}
            </Title>
        </div>
    )
}

/**
 * Handles the typed greeting on the homepage.
 * 
 * @param {Typing} param0 hands the styled component for the returned
 * element.
 * @returns the html element that handles the typewriter effect.
 */
const ManageGreeting = ({Typing}) => {
    let greetings = [
        'Hello world!',
        'Good Morning',
        'Good Afternoon',
        'Good Evening',
        'My name is James Hart',
        'Welcome to my website!',
        'I hope you enjoy your visit'
    ];
    const [ currentGreeting, setCurrentGreeting ] = useState(greetings[0]);

    /**
     * Changes greeting to the next in the list depending on the current hour
     * it will decide between the correct greetings.
     */
    const changeGreeting = () => {
        let currentHour = new Date().getHours();
        if (greetings.indexOf(currentGreeting) === 0 
            && currentHour < 12 && currentHour >= 0) {
            setCurrentGreeting(greetings[1])
        }
        else if (greetings.indexOf(currentGreeting) === 0 
                && currentHour < 18 && currentHour > 11) {
            setCurrentGreeting(greetings[2])
        }
        else if (greetings.indexOf(currentGreeting) === 0) {
            setCurrentGreeting(greetings[3])
        }
        else if (greetings.indexOf(currentGreeting) > 0 
                && greetings.indexOf(currentGreeting) < 4) {
            setCurrentGreeting(greetings[4])
        }
        else if (greetings.indexOf(currentGreeting) + 1 < greetings.length) {
            setCurrentGreeting(greetings[greetings.indexOf(currentGreeting) + 1]);
        }
        else {
            setCurrentGreeting(greetings[0]);
        }
    };

    return (
        <Typing 
            key={currentGreeting} 
            length={currentGreeting.length} 
            onAnimationEnd={changeGreeting}
        >
            <text> {currentGreeting} </text>
        </Typing>
    )
}

const HomePage = () => {
    const Body = styled.body`
        width: 100%;
        height: 100%;
    `

    const TypingAnimationAlternate = keyframes`
        0% { width: 0%; }
        10% { width: 0%; }
        40% { width: 100%; }
        60% { width: 100%; }
        90% { width: 0%; }
        100% { width: 0%; }
    `

    const CaretAnimation = keyframes`
        0% {
            border-right-color: transparent;
        }
        100% {
            border-right-color: orange;
        }
    `

    const MainHeadingContainer = styled.div`
        text-align: start;
        position: relative;
        z-index: 2;
        margin-left: 5%;
        margin-top: 100px;
        width: fit-content;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const NameHeading = styled.h1`
        font-size: 6rem;
        margin-bottom: 0;
        ${props => props.className === 'full-name' && css`
            overflow: hidden;
            border-right: 5px solid;
            white-space: nowrap;
            width: 0;
            animation: ${TypingAnimationAlternate} 6s forwards steps(${(p) => p.length}, end), ${CaretAnimation} 1s infinite;
        `}
        ${props => props.className === 'initials' && css`
            opacity: 0;
            animation: ${FadeIn} 3s forwards;
        `}
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
            border-right: 2px solid;
            border-right-color: transparent;
        }
    `

    const SubTitle = styled.h1`
        font-size: 3rem;
        margin-bottom: 20px;
        ${props => props.className === 'full-subtitle' && css`
            overflow: hidden;
            border-right: .1em solid orange;
            transform: border-right 1s;
            white-space: nowrap;
            width: 0;
            animation: ${TypingAnimationAlternate} 12s forwards steps(${(p) => p.length}, end), ${CaretAnimation} 1s infinite;
        `}
        ${props => props.className === 'anagram' && css`
            opacity: 0;
            animation: ${FadeIn} 3s forwards;
        `}
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 2rem;
        }
    `

    const PortraitCC = styled.div`
        width: 100%;


    `

    const PortraitContainer = styled.div`
        opacity: 0;
        animation: ${FadeUp} 2s linear forwards;
        width: fit-content;
        margin-left: 35%;
        margin-top: -10%;
        height: fit-content;
        @media screen and (max-width: 735px) and (orientation:portrait){
            margin-left: 25%;
        }
    `

    const Portrait = styled.img`
        filter: saturate(30%);
        @media screen and (max-width: 735px) and (orientation:portrait){
            width: 250px;
        }
    `

    const TypingContainer = styled.div`
        width: fit-content;
        clear: both;
        margin-left: 10px;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const Typing = styled.div`
        font-size: 1.5rem;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        border-right: .1em solid orange;
        // does the typewriter animation based on size of greeting
        animation: ${TypingAnimationAlternate} ${p => p.length / 2}s forwards steps(${(props) => props.length}, end), ${CaretAnimation} 1s infinite;
    `

    return (
        <Body>
            <MainHeadingContainer>
                <ManageName NameHeading={NameHeading} />
                <ManageTitle Title={SubTitle} />
            </MainHeadingContainer>
            <PortraitCC>
                <PortraitContainer>
                    <Portrait src={portrait} alt='me'></Portrait>
                        <TypingContainer>
                            <ManageGreeting Typing={Typing}/>
                        </TypingContainer>
                </PortraitContainer>
            </PortraitCC>
        </Body>
    )
}

export default HomePage;