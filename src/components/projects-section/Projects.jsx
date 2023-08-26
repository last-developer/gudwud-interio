import React from 'react'
import './projects.css'
import project1compress from '../../assets/project1compress.jpg'
import project2compress from '../../assets/project2compress.jpg'
import project3compress from '../../assets/project3compress.jpg'
import project4compress from '../../assets/project4compress.jpg'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const navigate = useNavigate()
    return (
        <section className='projects'>
            <h2 className='globalh2'>GudWud Selections</h2>
            <div className="project-container">
                <div className="project-content">
                    <h3>01 <span>Cook Up Elegance</span></h3>
                </div>
                <div className="project-box">
                    <img src={project1compress} alt="Avatar" className="image" />
                    <div className="overlay" onClick={() => {
                        navigate('/kitchen-interior');
                        window.scrollTo(0, 0); // Scroll to the top of the page
                    }}>
                        <a href="#" className="icon" title="kitchen selections">+</a>
                    </div>
                </div>
            </div>

            <div className="project-container">
                <div className="project-content">
                    <h3>02 <span>Wardrobe Wonders</span></h3>
                </div>
                <div className="project-box">
                    <img src={project2compress} alt="Avatar" className="image" />
                    <div className="overlay" onClick={() => {
                        navigate('/wardrobe-interior')
                        window.scrollTo(0, 0); // Scroll to the top of the page
                    }}>
                        <a href="#" className="icon" title="kitchen selections">+</a>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-content">
                    <h3>03 <span>Furniture Galore</span></h3>
                </div>
                <div className="project-box">
                    <img src={project3compress} alt="Avatar" className="image" />
                    <div className="overlay" onClick={() => {
                        navigate('/furniture-interior')
                        window.scrollTo(0, 0); // Scroll to the top of the page
                    }}>
                        <a href="#" className="icon" title="kitchen selections">+</a>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="project-content">
                    <h3>04 <span>Wooden Ceilings</span></h3>
                </div>
                <div className="project-box">
                    <img src={project4compress} alt="Avatar" className="image" />
                    <div className="overlay" onClick={() => {
                        navigate('/wooden-ceiling')
                        window.scrollTo(0, 0); // Scroll to the top of the page
                    }}>
                        <a href="#" className="icon" title="kitchen selections">+</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;