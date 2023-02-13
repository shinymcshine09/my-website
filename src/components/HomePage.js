import React from "react";
import styled, { keyframes } from 'styled-components';

import FadeIn from "./csseffects/FadeIn";

const HomePage = () => {
    const Body = styled.body`
        width: 100%;
        height: 100%;
        display: flex;
    `

    const MainHeadingContainer = styled.div`
        font-family: 'menlo';
        opacity: 0;
        animation: ${FadeIn} 3s forwards;
        margin: auto;
        padding-bottom: 10rem;
    `

    const NameFlicker = keyframes`
        0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow:
                0 0 7px #fff,
                0 0 10px #fff,
                0 0 21px #fff,
                0 0 42px #ff9900,
                0 0 82px #ff9900,
                0 0 92px #ff9900,
                0 0 102px #ff9900,
                0 0 151px #ff9900;
            color: white;
        }
        20%, 24%, 55% {
            text-shadow: none;
            color: transparent;
        } 
    `

    const NameHeading = styled.div`
        color: white;
        font-weight: 150;
        margin-bottom: -5rem;
        display: flex;
        white-space: nowrap;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
            border-right: 2px solid;
            border-right-color: transparent;
        }
    `

    const StartName = styled.h1`
        font-size: 8rem;
        text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #ff9900,
            0 0 82px #ff9900,
            0 0 92px #ff9900,
            0 0 102px #ff9900,
            0 0 151px #ff9900;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
        }
    `

    const MiddleName = styled.h1`
        font-size: 8rem;
        animation: ${NameFlicker} 1s alternate infinite;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
        }
    `

    const EndName = styled.h1`
        font-size: 8rem;
        text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #ff9900,
            0 0 82px #ff9900,
            0 0 92px #ff9900,
            0 0 102px #ff9900,
            0 0 151px #ff9900;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
        }
    `

    const LastLetterName = styled.h1`
        font-size: 8rem;
        text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #ff9900,
            0 0 82px #ff9900,
            0 0 92px #ff9900,
            0 0 102px #ff9900,
            0 0 151px #ff9900;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
        }
        transform: rotate(0.05turn);
    `

    const TitleFlicker = keyframes`
        0%, 5%, 18%, 22%, 25%, 53%, 65%, 70%, 95%, 100% {
            text-shadow:
                0 0 7px #ff9900,
                0 0 10px #ff9900,
                0 0 21px #ff9900,
                0 0 42px #ff9900,
                0 0 82px #ff9900,
                0 0 92px #ff9900,
                0 0 102px #ff9900,
                0 0 151px #ff9900;
            color: orange;
        }
        10%, 69%, 99% {
            text-shadow: none;
            color: transparent;
        } 
    `

    const Title = styled.div`
        font-size: 2rem;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 1.5rem;
        }
        display: flex;   
        justify-content: center;     
    `

    const StartTitle = styled.h1`
        animation: ${TitleFlicker} 2.5s alternate infinite;
    `

    const EndingTitle = styled.h1`
        color: orange;
        text-shadow:
            0 0 7px #ff9900,
            0 0 10px #ff9900,
            0 0 21px #ff9900,
            0 0 42px #ff9900,
            0 0 82px #fff,
            0 0 92px #fff,
            0 0 102px #fff,
            0 0 151px #fff;
        }
    `

    return (
        <Body>
            <MainHeadingContainer>
                <NameHeading>
                    <StartName>
                        Jam
                    </StartName>
                    <MiddleName>
                        es H
                    </MiddleName>
                    <EndName>
                        ar
                    </EndName>
                    <LastLetterName>
                        t
                    </LastLetterName>
                </NameHeading>
                <Title>
                    <StartTitle>
                        Aspiring&nbsp;
                    </StartTitle>
                    <EndingTitle>
                        Web Developer
                    </EndingTitle>
                </Title>
            </MainHeadingContainer>
        </Body>
    )
}

export default HomePage;