import React from "react";
import styled from 'styled-components';

import FadeIn from "./csseffects/FadeIn";

const HomePage = () => {
    const Body = styled.body`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    `

    const MainHeadingContainer = styled.div`
        position: relative;
        min-height: 50vh;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const NameHeading = styled.h1`
        font-size: 7rem;
        font-weight: 150;
        margin-bottom: -1rem;
        opacity: 0;
        animation: ${FadeIn} 3s forwards;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 5rem;
            border-right: 2px solid;
            border-right-color: transparent;
        }
    `

    const Title = styled.h1`
        font-size: 3rem;
        font-weight: 150;
        color: orange;
        opacity: 0;
        animation: ${FadeIn} 3s forwards;
        @media screen and (max-width: 735px) and (orientation:portrait){
            font-size: 2rem;
        }
    `

    return (
        <Body>
            <MainHeadingContainer>
                <NameHeading>
                        James Hart
                </NameHeading>
                <Title>
                        Aspiring Junior Web Developer
                </Title>
            </MainHeadingContainer>
        </Body>
    )
}

export default HomePage;