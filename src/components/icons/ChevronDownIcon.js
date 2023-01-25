import React from "react"
import styled from "styled-components";

import FadeDown from "../csseffects/FadeDown";

export default function ChevronDownIcon() {
    const Icon = styled.svg`
        width: 50px;
        filter: invert(.5);
        position: absolute;
        bottom: 0;
        animation: ${FadeDown} 1s forwards linear;
    `

    return (
        <Icon 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
        >
            <path 
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
        </Icon>
    )
}