import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

export default function TypewriterEffect({Greetings, SecondGreetings, ContainerStyle, isFormSent}) {
    const [ greetings, setGreetings ] = useState(Greetings);
    const afterFormSent = SecondGreetings;
    const [ output, setOutput ] = useState('');
    const [ isTyping, setIsTyping ] = useState(true);
    const [ listIndex, setListIndex ] = useState(0);

    useEffect(() => {
        if (isTyping) {
            setTimeout(() => {
                const newOutput = greetings[listIndex].slice(0, output.length + 1);
                setOutput(newOutput);
            }, 100)
        }
        if (output === greetings[listIndex]) {
            setTimeout (() => {
                setIsTyping(false);
            }, 2000)
        }
        if  (!isTyping) {
            setTimeout(() => {
                const newOutput = output.slice(0, output.length - 1)
                setOutput(newOutput);
            }, 150)
        }
        if (output === '' && !isTyping) {
            setTimeout (() => {
                setIsTyping(true);
                if (listIndex === 0) {
                    setListIndex(1);
                }
                else {
                    setListIndex(0);
                }
            }, 2000)
        }
        if (isFormSent) {
            setGreetings(afterFormSent);
        }
    })

    const CaretAnimation = keyframes`
        0% {
            border-right-color: transparent;
        }
        100% {
            border-right-color: orange;
        }
    `

    const CaretStyle = styled.div`
        &::after {
            content: " ";
            border-right: 2px solid orange;
            animation: ${CaretAnimation} 1s ease-in-out infinite;
        }
    `

    return (
        <ContainerStyle>
            <CaretStyle>
                <text>{output}</text>
            </CaretStyle>
        </ContainerStyle>
    )
}