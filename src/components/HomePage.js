import React, { useState } from "react";
import styled, { keyframes, css } from 'styled-components';

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

const ManageGreeting = ({Typing}) => {
    let greetings = [
        'Hello!',
        'Good Morning',
        'Good Afternoon',
        'Good Evening',
        'My name is James Hart',
        'Welcome to my website!',
        'I hope you enjoy your visit'
    ];
    const [ currentGreeting, setCurrentGreeting ] = useState(greetings[0]);

    const changeGreeting = () => {
        var currentHour = new Date().getHours();
        if (greetings.indexOf(currentGreeting) === 0 && currentHour < 12) {
            setCurrentGreeting(greetings[1])
        }
        else if (greetings.indexOf(currentGreeting) === 0 && currentHour < 18) {
            setCurrentGreeting(greetings[2])
        }
        else if (greetings.indexOf(currentGreeting) === 0) {
            setCurrentGreeting(greetings[3])
        }
        else if (greetings.indexOf(currentGreeting) + 1 < greetings.length) {
            setCurrentGreeting(greetings[greetings.indexOf(currentGreeting) + 1]);
        }
        else {
            setCurrentGreeting(greetings[0]);
        }
    };

    const getId = () => {
        const id = currentGreeting;
        return id;
    };

    return (
        <Typing key={getId()} length={currentGreeting.length} onAnimationEnd={changeGreeting}>
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

    const FadeIn = keyframes`
        0% { opacity: 0; }
        100% { opacity: 1; }
    `

    const MainHeadingContainer = styled.div`
        text-align: start;
        margin-left: 5%;
        margin-top: 100px;
        width: fit-content;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const NameHeading = styled.h1`
        font-size: 8rem;
        margin-bottom: 0;
        ${props => props.className === 'full-name' && css`
            overflow: hidden;
            border-right: 5px solid;
            white-space: nowrap;
            width: 0;
            animation: ${TypingAnimationAlternate} 6s forwards steps(${(p) => p.length}, end), ${CaretAnimation} 1s infinite;
        `}
        ${props => props.className === 'initials' && css`
            opacity: 1;
            animation: ${FadeIn} 3s forwards;
        `}
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
            border-right: 2px solid;
            border-right-color: transparent;
            /* margin-bottom: 2rem; */
        }
    `

    const Title = styled.h1`
        font-size: 3rem;
        ${props => props.className === 'full-subtitle' && css`
            overflow: hidden;
            border-right: .1em solid orange;
            transform: border-right 1s;
            white-space: nowrap;
            width: 0;
            animation: ${TypingAnimationAlternate} 12s forwards steps(${(p) => p.length}, end), ${CaretAnimation} 1s infinite;
        `}
        ${props => props.className === 'anagram' && css`
            opacity: 1;
            animation: ${FadeIn} 3s forwards;
        `}
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 2rem;
        }
    `

    const TypingContainer = styled.div`
        margin-left: 5%;
        /* margin-top: 4rem; */
        width: fit-content;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const Typing = styled.div`
        font-size: 2rem;
        width: 100%;
        /* margin-top: 3%; */
        margin-bottom: 0;
        text-align: start;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        border-right: .1em solid orange;
        animation: ${TypingAnimationAlternate} 10s forwards steps(${(props) => props.length}, end), ${CaretAnimation} 1s infinite;
        ${props => props.length === 6 && css`
            animation: ${TypingAnimationAlternate} 4s forwards steps(${(props) => props.length}, end), ${CaretAnimation} 1s infinite;
        `}
        ${props => props.length > 11 && props.length < 15 && css`
            animation: ${TypingAnimationAlternate} 6s forwards steps(${(props) => props.length}, end), ${CaretAnimation} 1s infinite;
        `}
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 1.5rem;
        }
    `

    return (
        <Body>
            <MainHeadingContainer>
                <ManageName NameHeading={NameHeading} />
                <ManageTitle Title={Title} />
            </MainHeadingContainer>
            <TypingContainer>
                <ManageGreeting Typing={Typing}/>
            </TypingContainer>
        </Body>
    )
}

export default HomePage;