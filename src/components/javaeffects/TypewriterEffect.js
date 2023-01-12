import React, { useState, useEffect } from "react";

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

    return (
        <ContainerStyle>
            <div>
                <text>{output}</text>
            </div>
        </ContainerStyle>
    )
}