import React, { useState } from "react";
import styled, { css } from 'styled-components';

import FadeIn from "./CSSEffects/FadeIn";
import TypingAnimationAlternate from "./CSSEffects/TypingAnimationAlternate";
import CaretAnimation from "./CSSEffects/CaretAnimation";

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
        <div 
            onMouseOver={handleMouseOverTitle} 
            onMouseOut={handleMouseOutTitle}
        >
            <Title length={title.length}
                className={isHoveringTitle ? 'full-subtitle' : 'anagram'}>
                    {title}
            </Title>
        </div>
    )
}

const HomePage = () => {
    const Body = styled.body`
        width: 100%;
        height: 100%;
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

    return (
        <Body>
            <MainHeadingContainer>
                <ManageName NameHeading={NameHeading} />
                <ManageTitle Title={SubTitle} />
            </MainHeadingContainer>
        </Body>
    )
}

export default HomePage;