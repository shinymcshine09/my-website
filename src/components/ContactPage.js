import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styled, { css } from "styled-components";
import { InView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import Heading from "./styledcomponents/HeadingStyle";

import FadeUp from "./csseffects/FadeUp";
import FadeIn from "./csseffects/FadeIn";

import TypewriterEffect from "./typewritereffect/TypewriterEffect";
import Caret from "./typewritereffect/Caret";


function FormInput({Label, UserInput, InputContainer, Input, UserMessage}) {
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');

    return (
        <InputContainer>
             <Label>
                Name:
            </Label>
            <Input>
                <br/>
                <UserInput
                    type="text" 
                    name="from_name"
                    required 
                    placeholder='Name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
            </Input>
            <Label>
                Email:
            </Label>
            <Input>
                <br/>
                <UserInput
                    type="email" 
                    name="user_email"
                    required 
                    placeholder='Email...'
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <br/>
            </Input>
            <Label>
                Message:
            </Label>
            <Input>
                <br/>
                <UserMessage 
                    name="message"
                    placeholder='Your message...' 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br/>
            </Input>
        </ InputContainer>
    )
}

export default function ContactPage() {
    const form = useRef();
    const location = useLocation();
    const [isFormSent, setIsFormSent ] = useState(false);
    var greetings = [
        "Send me a message, if you wish", 
        'I would love to hear from you'
    ];
    var afterFormSentGreetings = [
        'Thanks for the message', 
        'I will get back to you asap'
    ];


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'default_service',
            'template_hdnu45j',
            form.current,
            'r588IplFP8PloORH4'
        ).then(
            result => console.log(result.text),
            error => console.log(error.text),
        );

        setIsFormSent(true);
    };

    const Page = styled.body`
        background-color: rgb(49, 49, 49);
        text-align: center;
        width: 100vw;
        height: 100vh;
    `

    const Content = styled.div`
        height: 100vh;
    `

    const Typing = styled.div`
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        padding-top: 1rem;
        @media screen and (max-width: 569px) and (orientation:portrait){
            font-size: 1rem;
        }
        ${p => p.inView && location.pathname === '/' && css`
            animation: ${FadeUp} 2s forwards;
        `}
        ${location.pathname !== '/' && css`
            animation: ${FadeIn} 2s forwards;
        `}
    `

    const FormContainer = styled.div`
        opacity: 0;
        ${p => p.inView && location.pathname === '/' && css`
            animation: ${FadeUp} 2s forwards;
        `}
        ${location.pathname !== '/' && css`
            animation: ${FadeIn} 2s forwards;
        `}
    `

    const SubmitButton = styled.input`
        margin-top: 1rem;
        padding: 10px;
        border-radius: 8px;
        color: black;
        width: 6rem;
        border-style: none;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        padding-bottom: 1rem;
        ${p => p.inView && location.pathname === '/' && css`
            animation: ${FadeUp} 2s forwards;
        `}
        ${location.pathname !== '/' && css`
            animation: ${FadeIn} 2s forwards;
        `}
    `

    const InputStyle = css`
        color: black;
        width: 90%;
        padding: .8rem;
        margin: 1rem;
        border-radius: 1rem;
        border-style: none;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    `

    const InputContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 10fr;
        width: 60%;
        margin-left: 20%;
        margin-right: 20%;
        justify-content: center;
        align-items: center;
    `

    const Label = styled.label`
        margin-top: 1rem;
        width: 100%;
        text-align: left;
    `

    const Input = styled.div`
        width: 100%;
    `

    const UserInput = styled.input`
        ${InputStyle}
        margin-top: 1rem;
    `

    const UserMessage = styled.textarea`
        ${InputStyle}
        margin-top: 1rem;
        &::-webkit-resizer {
            display: none;
        }
    `

    const Container = styled.div`
        height: 30px;
    `

    return (
        <Page>
            <InView 
                triggerOnce
            >
                {({ inView, ref }) => (
                    <Content>
                        <div>
                            <Heading 
                                location={location} 
                                ref={ref} 
                                inView={inView}
                            >
                                Contact Me
                            </Heading>
                        </div>
                        <Typing 
                            ref={ref} 
                            inView={inView}
                        >
                            <TypewriterEffect 
                                Greetings={greetings} 
                                SecondGreetings={afterFormSentGreetings} 
                                ContainerStyle={Container} 
                                isFormSent={isFormSent} 
                            />
                            <Caret />
                        </Typing>
                        <br/>
                        <FormContainer 
                            ref={ref} 
                            inView={inView}
                        >
                            <form 
                                ref={form} 
                                onSubmit={sendEmail}
                            >
                                <FormInput 
                                    InputContainer={InputContainer} 
                                    Input={Input} 
                                    Label={Label}
                                    UserInput={UserInput} 
                                    UserMessage={UserMessage}
                                />
                                <SubmitButton 
                                    ref={ref} 
                                    inView={inView} 
                                    type="submit" 
                                    value='Send' 
                                />
                            </form>
                        </FormContainer>
                    </Content>
                )}
            </InView>
        </Page>
    )
}