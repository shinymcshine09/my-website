import React from "react";
import styled, { keyframes, css } from 'styled-components';

import FadeIn from "./csseffects/FadeIn";

import ChevronDownIcon from "./icons/ChevronDownIcon";

const HomePage = () => {
    const Body = styled.body`
        width: 100%;
        height: 100%;
        display: flex;
    `

    const MainHeadingContainer = styled.div`
        opacity: 0;
        animation: ${FadeIn} 3s forwards;
        margin: auto;
        padding-bottom: 10rem;
    `

    const NameFlourescent = css`
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
    `

    const NameStyle = css`
        font-size: 8rem;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
        }
    `

    const NameHeading = styled.div`
        ${NameFlourescent}
        font-weight: 150;
        margin-bottom: -5rem;
        display: flex;
        white-space: nowrap;
    `

    const StartName = styled.h1`
        ${NameStyle}
    `

    const LastLetterName = styled.h1`
        ${NameStyle}
        transform: rotate(0.05turn);
    `

    const TitleFlourescent = css`
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
    `

    const TitleFlicker = keyframes`
        0%, 5%, 18%, 22%, 25%, 53%, 65%, 70%, 95%, 100% {
            ${TitleFlourescent}
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
        animation: ${TitleFlicker} 2s alternate infinite;
    `

    const EndingTitle = styled.h1`
        ${TitleFlourescent}
    `

    const FadeDownTemporarily = keyframes`
        0% { 
            opacity: 0; 
            -webkit-transform: translateY(-100%); 
        }
        99% { 
            opacity: .8;
            -webkit-transform: translateY(0%)
        }
        100% { 
            opacity: 0; 
        }
    `

    const ScrollText = styled.h4`
        padding-left: 1rem;
        padding-right: 1rem;
    `

    const ScrollNotification = styled.div`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 3;
        animation: ${FadeDownTemporarily} 2s 3 forwards;
    `

    return (
        <Body>
            <MainHeadingContainer>
                <NameHeading>
                    <StartName>
                        James Har
                    </StartName>
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
            <ScrollNotification>
                <ChevronDownIcon/>
                    <ScrollText>
                        SCROLL DOWN FOR MORE
                    </ScrollText>
                <ChevronDownIcon/>
            </ScrollNotification>
        </Body>
    )
}

export default HomePage;