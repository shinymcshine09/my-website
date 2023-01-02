import React from "react";
import Zoom from 'react-reveal/Zoom';
import styled from "styled-components";
import img from '../images/IMG_0634.jpeg';
// import ListGroup from 'react-bootstrap/ListGroup';

import Heading from "./styledcomponents/HeaderStyle";

const AboutPage = () => {
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
        <Content>
            <Zoom>
                <div>
                    <Heading>About Me</Heading>
                </div>
            </Zoom>
            <Body>
                <p>
                    I am an Open University student currently studying Computer Science looking to 
                    get a job as a Web Developer. I am looking for a Junior position to help me grow 
                    my skills as a developer to prepare for the long term.
                </p>
                <br/>
                <p>
                    In my spare time I code when not studying for University, as it has 
                    become sort of a hobby for me. One of the things I 
                    have been coding is this website, amongst other things, to showcase some of the 
                    skills I have already acquired and hope to build on in future Jobs.
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
    )
}

export default AboutPage;