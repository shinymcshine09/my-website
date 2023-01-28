import React from "react";
import styled, { keyframes } from "styled-components";

export default function Caret() {
    const CaretAnimation = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `

    const CaretStyle = styled.text`
        color: orange;
        animation: ${CaretAnimation} 1s infinite;
        //centers caret
        margin-top: -2px;
    `

    return (
        <CaretStyle>|</CaretStyle>
    )
}