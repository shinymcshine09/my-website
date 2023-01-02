import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import emailjs from '@emailjs/browser';
import styled, { css } from "styled-components";

import Heading from "./styledcomponents/HeaderStyle";

const FormInput = ({UserInput, UserMessage}) => {
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');
    return (
        <>
            <label>
                Name:
            </label>
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
            <label>
                Email:
            </label>
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
            <label>
                Message:
            </label>
            <br/>
            <UserMessage 
                name="message"
                placeholder='Your message...' 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <br/>
        </>
    )
}

const ContactPage = () => {
    const form = useRef();
    const [ typewriterOutput, setTypewriterOutput ] = useState(['Send me a message', 'I would love to hear from you']);

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

        setTypewriterOutput(['Thanks for the message', 'I will get back to you asap']);
    };

    const InputStyle = css`
        color: black;
        width: 50%;
        padding: .8rem;
        margin: 1rem;
        border-radius: 1rem;
        border-style: none;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        @media screen and (max-width: 569px) and (orientation:portrait) {
            width: 70%;
        }
    `

    const Content = styled.body`
        background-color: rgb(49, 49, 49);
        text-align: center;
        width: 100vw;
        height: 100vh;
    `

    const Typing = styled.div`
        font-size: 2rem;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        padding-top: 1rem;
        @media screen and (max-width: 569px) and (orientation:portrait){
            zoom: 60%;
        }
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

    const SubmitButton = styled.input`
        margin-top: 1rem;
        padding: 10px;
        border-radius: 8px;
        color: black;
        width: 6rem;
        border-style: none;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        padding-bottom: 1rem;
    `

    return (
        <Content>
            <div>
                <Heading>Contact Me</Heading>
            </div>
            <Typing>
                <Typewriter
                    options={{
                        strings: typewriterOutput,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Typing>
            <br/>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <FormInput UserInput={UserInput} UserMessage={UserMessage}/>
                    <SubmitButton type="submit" value='Send' />
                </form>
            </div>
        </Content>
    )
}

export default ContactPage;