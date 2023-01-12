import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import img from '../images/IMG_0634.jpeg';
import { InView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import Heading from "./styledcomponents/HeadingStyle";
import FadeUp from "./styledcomponents/FadeUp";
import FadeIn from "./styledcomponents/FadeIn";
import LittleWiggle from "./styledcomponents/LittleWiggle";

import CVIcon from "./icons/CVIcon";

import CVpdf from "../images/CV.pdf";

const AboutPage = () => {
    const location = useLocation();

    const Content = styled.div`
        background-image: linear-gradient(rgba(67, 67, 67, 0.7), rgba(67, 67, 67, 0.7)), url(${img});
        background-size:cover;
        background-repeat: no-repeat;
        height: 90%;
        text-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        width: 100vw;
        height: 100vh;
    `

    const Body = styled.body`
        margin-left: 15%;
        margin-right: 15%;
        height: 70%;
        opacity: 0;
        ${p => p.inView && location.pathname === '/' && css`
            animation: ${FadeUp} 2s forwards;
        `}
        ${location.pathname !== '/' && css`
            animation: ${FadeIn} 2s forwards;
        `}
        @media screen and (max-width: 640px) and (orientation:portrait){
            font-size: .9rem;
            margin-left: 5%;
            margin-right: 5%;
        }
    `

    const Paragraph = styled.div`
        width: fit-content;
        background: rgba(0,0,0,0.4);
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 20px;
        margin-bottom: 2rem;
        text-indent: 2.5rem;
        line-height: 1.8rem;
        font-weight: bold;
    `

    const SkillsCV = styled.div`
        display:grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 2rem;
    `

    const List = styled.div`
        line-height: normal;
        width: 100%;
        border-radius: 20px;
        background: rgba(0,0,0,0.4);
        font-weight: bold;
    `

    const SkillsHeading = styled.h4`
        text-decoration: underline;
        color: orange;
        text-indent: 2.5rem;
    `

    const ListItem = styled.li`
        list-style: disc;
    `

    const CV = styled(Link)`
        padding-top: 1rem;
        width: 100%;
        background: rgba(0,0,0,0.4);
        border-radius: 20px;
        text-align: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:hover {
            animation: ${LittleWiggle} 300ms infinite ;
        }
    `

    const CVText = styled.text`
        text-decoration: underline;
        color: orange;
        font-weight: bold;
        padding-bottom: 1rem;
    `

    return (
        <InView triggerOnce>
            {({ inView, ref }) => (
        <Content>
            <div>
                <Heading 
                    location={location} 
                    ref={ref} 
                    inView={inView}
                >
                    About Me
                </Heading>
            </div>
            <Body ref={ref} inView={inView}>
                <Paragraph>
                    <p>
                        I am an Open University student currently studying Computer Science part time looking to 
                        get a job as a Web Developer. I am looking for a Junior position to help me grow 
                        my skills as a developer through learning from others.
                    </p>
                    <p>
                        When not studying for University, I code a lot as it has 
                        become sort of a hobby for me. One of the things I 
                        have been coding is this website, amongst other things. This is to showcase some of the 
                        skills I have already but also hope to build on in future Jobs.
                    </p> 
                </Paragraph>
                <SkillsCV>
                    <List>
                        <SkillsHeading>Skills</SkillsHeading>
                        <ol>
                            <ListItem>Java</ListItem>
                            <ListItem>HTML/CSS/React</ListItem>
                            <ListItem>Python</ListItem>
                            <ListItem>CISCO Networking Essentials</ListItem>
                            <ListItem>Linux</ListItem>
                        </ol>
                    </List>
                    <CV to={CVpdf} target="_blank download">
                        <CVIcon />
                        <br />
                        <CVText>My CV</CVText>
                    </CV>
                </SkillsCV>
            </Body>
        </Content>
        )}
        </InView>
    )
}

export default AboutPage;