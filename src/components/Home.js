import React from "react"

import HomePage from "./HomePage"
import ProjectsPage from "./ProjectPage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"

const Home = () => {
    return (
        <>
            <div class='container'>
                <section className='one'>
                    <HomePage />
                </section>
                <section className='two'>
                    <ProjectsPage />
                </section>
                <section className='three'>
                    <AboutPage />
                </section>
                <section className='four'>
                    <ContactPage />
                </section>
            </div>
        </>
    )
}

export default Home