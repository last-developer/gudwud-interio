import React from 'react'
import Hero from '../hero-section/Hero'
import About from '../about-section/About'
import Projects from '../projects-section/Projects'
import Contact from '../contact-section/Contact'
import Whyus from '../whyus/Whyus'

const Maincontainer = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Whyus/>
            <Contact />
        </>
    )
}

export default Maincontainer;