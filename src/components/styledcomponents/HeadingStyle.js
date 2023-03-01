import styled, { css } from "styled-components";

import FadeUp from "../csseffects/FadeUp";
import FadeIn from "../csseffects/FadeIn";

const Heading = styled.h1`
    text-align: center;
    font-size: 3rem;
    padding-top: 9rem;
    padding-bottom: 2rem;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin-top: 0;
    color: orange;
    opacity: 0;
    @media screen and (max-width: 569px) and (orientation:portrait){
        font-size: 2rem;
        margin-bottom: 0;
    }
    ${p => p.inView && p.location.pathname === '/' && css`
            animation: ${FadeUp} 2s forwards;
        `}
    ${p => p.location.pathname !== '/' && css`
        animation: ${FadeIn} 2s forwards;
    `}
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
`;

export default Heading;