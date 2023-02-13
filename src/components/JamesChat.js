import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

import CrossIcon from "./icons/CrossIcon";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";

import portrait from "../images/IMG_1337.jpeg";

import FadeLeft from "./csseffects/FadeLeft";

import TypewriterEffect from "./typewritereffect/TypewriterEffect";
import Caret from "./typewritereffect/Caret";

const ManageGreeting = ({Typing, TypingCC}) => {
    const location = useLocation();
    
    let greetings = [
        [
            'Hello Visitor!',
            'My name is James Hart',
            'Welcome to my website!',
            'Scroll down for more',
            'I hope you enjoy it',
            "I'm an automated guide",
            'I will show you around',
            'This is the home page',
            'This is all pages in one'
        ],
        [
            'These are my projects',
            'Please have a look',
            "The website's good :-)",
            'The snake game is fun'
        ],
        [
            'This page is about me',
            'About real life James',
            'Not guide bot James :-)',
            'Look at my CV for more'
        ],
        [
            'Here you can contact me',
            'But do not feel obliged',
            'We could be pen pals :-)',
        ]
    ];

    const [ greetingList, setGreetingList ] = useState(greetings[0]);

    useEffect(() => {
        if (location.pathname === '/') {
            setGreetingList(greetings[0]);
        }
        else if (location.pathname === '/projects') {
            setGreetingList(greetings[1]);
        }
        else if (location.pathname === '/about') {
            setGreetingList(greetings[2]);
        }
        else {
            setGreetingList(greetings[3]);
        }
    }, [location.pathname]);

    return (
        <TypingCC>
            <TypewriterEffect key={greetingList} Greetings={greetingList} ContainerStyle={Typing}/>
            <Caret />
        </TypingCC>
    )
}

export default function JamesChat() {
    const [ noGuide, setGuide ] = useState(true);

    const PortraitContainer = styled.div`
        position: absolute;
        bottom: 14rem;
        right: 0;
        z-index: 3;
        display: flex;
        justify-content: flex-end;
        opacity: 0;
        animation: ${FadeLeft} 1s linear forwards;
        // so i can scroll while hovering over this element
        height: 1px;

        width: 100vw;
        margin-right: 1rem;
        ${!noGuide && css`
            display: none;
        `}
        @media screen and (max-width: 550px) and (orientation:portrait) {
            transform: scale(.7);
            // transform also scales width so:
            width: 200vw;
            // keeps james chat on the right hand side
            transform-origin: bottom right;
            margin-bottom: -4rem;
        }
    `

    const Portrait = styled.img`
        object-fit: cover;
        object-position: 0% 30%;
        filter: saturate(30%);
        border-radius: 200px;
        border: 5px rgba(27,27,27,.7) solid;
        filter: transparent(20%);
        width: 160px;
        height: 160px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const SpeechBubble = styled.div`
        border: 4px rgba(27,27,27,.7) solid;
        background-color: rgba(40,40,40,.7);
        border-radius: 50px;
        margin-right: 1rem;
        width: fit-content;
        height: fit-content;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const TypingCC = styled.div`
        // puts caret after typing effect
        display: flex;

        margin: auto;
    `

    const TypingContainer = styled.div`
        padding: 1rem;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const Typing = styled.div`
        white-space: nowrap;
        font-size: 1rem;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const CloseBubble = styled.button`
        border: 4px rgba(27,27,27,.8) solid;
        border-radius: 50px;
        background-color: rgba(27,27,27,.5);
        width: 1px;
        height: 1px;
        padding: 1rem;
        margin-left: -1rem;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        &:hover {
            background-color: rgba(100,100,100,.5);
        }
    `

    const BubbleOne = styled.div`
        border: 4px rgba(27,27,27,.8) solid;
        border-radius: 50px;
        background-color: rgba(27,27,27,.5);
        width: 1px;
        margin-right: 1rem;
        margin-top: 2rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const BubbleTwo = styled.div`
        border: 4px rgba(27,27,27,.8) solid;
        border-radius: 50px;
        background-color: rgba(27,27,27,.5);
        width: 1px;
        margin-right: 1rem;
        margin-top: 4rem;
        padding: .5rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const SideArrow = styled.button`
        position: fixed;
        bottom: 0;
        right: 0;
        margin-right: -5px;
        margin-bottom: 70px;
        border: 2px rgba(100,100,100,.5) solid;
        border-radius: 5px;
        background-color: rgba(100,100,100,.5);
        height: 60px;
        width: 40px;
        padding: 1rem;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        animation: ${FadeLeft} 500ms linear forwards;
        ${noGuide && css`
            display: none;
        `}
        &:hover {
            background-color: rgba(200,200,200,.5);
        }
    `

    return (
        <div>
            <PortraitContainer>
                <SpeechBubble>
                    <TypingContainer>
                        <ManageGreeting Typing={Typing} TypingCC={TypingCC}/>
                    </TypingContainer>
                </SpeechBubble>
                <BubbleOne/>
                <BubbleTwo/>
                <Portrait src={portrait} alt='me'></Portrait>
                <CloseBubble onClick={() => setGuide(!noGuide)}>
                    <CrossIcon/>
                </CloseBubble>
            </PortraitContainer>
            <SideArrow onClick={() => setGuide(!noGuide)}>
                <ChevronLeftIcon />
            </SideArrow>
        </div>
    )
}