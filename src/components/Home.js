import React from "react"
import styled, { css } from "styled-components"

import HomePage from "./HomePage"
import ProjectsPage from "./ProjectPage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"

import HomeBackground from "../images/codingbackground.jpg"
import AboutBackground from "../images/IMG_0634.jpeg"

const Home = () => {
    const Section = css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        scroll-snap-align: start;
    `

    const Container = styled.div`
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: monospace;
        color: rgb(255, 255, 255);
    `
    
    const One = styled.section`
        background-size:cover;
        background-repeat: no-repeat;
        text-align: center;
        width: 100%;
        color: white;
        background-color: rgb(49, 49, 49);
        background-image: linear-gradient(transparent, rgb(66, 65, 65)), url(${HomeBackground});
        ${Section}
        backface-visibility: hidden; 
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility:    hidden;
        -ms-backface-visibility:     hidden;
    `

    const Two = styled.section`
        ${Section}
    `

    const Three = styled.section`
        background-image: linear-gradient(rgba(67, 67, 67, 0.7), rgba(67, 67, 67, 0.7)), url(${AboutBackground});
        background-size:cover;
        background-repeat: no-repeat;
        ${Section}
    `

    const Four = styled.section`
        background-color: rgb(49, 49, 49);
        ${Section}
    `

    return (
        <>
            <Container>
                <One>
                    <HomePage />
                </One>
                <Two>
                    <ProjectsPage />
                </Two>
                <Three>
                    <AboutPage />
                </Three>
                <Four>
                    <ContactPage />
                </Four>
            </Container>
        </>
    )
}

export default Home