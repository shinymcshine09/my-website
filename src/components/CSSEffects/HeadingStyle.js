import styled, { css } from "styled-components";
import FadeUp from "./FadeUp";
import FadeIn from "./FadeIn";

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
`;

export default Heading;