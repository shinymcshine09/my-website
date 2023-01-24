import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";

import CrossIcon from "./icons/CrossIcon";
import ChevronLeftIcon from "./icons/ChevronLeftIcon";
import portrait from "../images/IMG_1337.jpeg";
import FadeLeft from "./CSSEffects/FadeLeft";
import TypingAnimationAlternate from "./CSSEffects/TypingAnimationAlternate";
import CaretAnimation from "./CSSEffects/CaretAnimation";

/**
 * Handles the typed greeting on the homepage.
 * 
 * @param {Typing} param0 hands the styled component for the returned
 * element.
 * @returns the html element that produces the typewriter effect.
 */
const ManageGreeting = ({Typing}) => {
    const location = useLocation()

    let greetings = [
        'Hello visiter!',
        'Good Morning',
        'Good Afternoon',
        'Good Evening',
        'My name is James Hart',
        'Welcome to my website!',
        'I hope you enjoy my site',
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

export default function JamesChat() {
    const [ noHelper, setNoHelper ] = useState(false);

    const PortraitContainer = styled.div`
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 3;
        display: flex;
        opacity: 0;
        animation: ${FadeLeft} 1s linear forwards;
        margin: 2rem;
        // so i can scroll while hovering over this element
        height: 1px;
        margin-bottom: 14rem;
        ${noHelper && css`
            display: none;
        `}
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
        margin-right: 4rem;
        margin-top: -2rem;
        width: 250px;
        height: 40px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        @media screen and (max-width: 550px) and (orientation:portrait){
            display: none;
        }
    `

    const TypingContainer = styled.div`
        width: fit-content;
        padding: 1rem;
        margin-left: 5px;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const Typing = styled.div`
        font-size: 1rem;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        border-right: .1em solid orange;
        // does the typewriter animation based on size of greeting
        animation: ${TypingAnimationAlternate} ${p => p.length / 2}s forwards steps(${(props) => props.length}, end), ${CaretAnimation} 1s infinite;
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
        margin-left: 19rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const BubbleTwo = styled.div`
        border: 4px rgba(27,27,27,.8) solid;
        border-radius: 50px;
        background-color: rgba(27,27,27,.5);
        width: 1px;
        margin-left: 21.5rem;
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
        ${!noHelper && css`
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
                        <ManageGreeting Typing={Typing}/>
                    </TypingContainer>
                    <BubbleOne/>
                    <BubbleTwo/>
                </SpeechBubble>
                <Portrait src={portrait} alt='me'></Portrait>
                <CloseBubble onClick={() => setNoHelper(!noHelper)}>
                    <CrossIcon/>
                </CloseBubble>
            </PortraitContainer>
            <SideArrow onClick={() => setNoHelper(!noHelper)}>
                <ChevronLeftIcon />
            </SideArrow>
        </div>
    )
}