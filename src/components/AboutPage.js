import React from "react";
import styled, { css } from "styled-components";
import img from '../images/IMG_0634.jpeg';
import { InView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import Heading from "./styledcomponents/HeadingStyle";
import FadeUp from "./styledcomponents/FadeUp";
import FadeIn from "./styledcomponents/FadeIn";

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
        text-indent: 2.5rem;
        line-height: 1.8rem;
        font-weight: bold;
        opacity: 0;
        font-size: 1.4vh * 1.4vw;
        ${p => p.inView && location.pathname === '/' && css`
            animation: ${FadeUp} 2s forwards;
        `}
        ${location.pathname !== '/' && css`
            animation: ${FadeIn} 2s forwards;
        `}
    `

    const List = styled.div`
        line-height: normal;
    `

    const SkillsHeading = styled.h4`
        text-decoration: underline;
    `

    const ListItem = styled.li`
        list-style: disc;
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
                <p>
                    I am an Open University student currently studying Computer Science looking to 
                    get a job as a Web Developer. I am looking for a Junior position to help me grow 
                    my skills as a developer to prepare for the long term.
                </p>
                <br/>
                <p>
                    When not studying for University I code a lot, as it has 
                    become sort of a hobby for me. One of the things I 
                    have been coding is this website, amongst other things. This is to showcase some of the 
                    skills I have already but also hope to build on in future Jobs.
                </p> 
                <br/>
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
            </Body>
        </Content>
        )}
        </InView>
    )
}

export default AboutPage;