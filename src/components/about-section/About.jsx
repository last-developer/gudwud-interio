import React from 'react';
import './about.css';
import about1compress from '../../assets/about1compress.jpg'
import about2compress from '../../assets/about2compress.jpg'
import about3compress from '../../assets/about3compress.jpg'

const About = () => {
    return (
        <section className='about'>
            <h2 className='globalh2'>What GudWud Provides</h2>
            <div className='about-container'>
                <div className="about-image">
                    <img src={about1compress} alt="image" />
                </div>
                <div className="about-content">
                    <h6>
                        Transforming Spaces with Elegance
                    </h6>
                    <p>
                        At Gud Wud Interio, we breathe life into your spaces. Our design philosophy centers around elegance and functionality. Every room we touch becomes a canvas where artistry meets practicality, creating environments that inspire and rejuvenate.
                    </p>
                </div>
            </div>
            <div className='about-container'>
                <div className="about-image">
                    <img src={about2compress} alt="image" />
                </div>
                <div className="about-content">
                    <h6>
                        Innovative Designs for Modern Living
                    </h6>
                    <p>
                        Embrace the future of living with Gud Wud Interio. Our innovative designs blend contemporary aesthetics with thoughtful functionality. From open-concept layouts to sustainable materials, we create spaces that mirror your lifestyle while pushing boundaries in interior design.
                    </p>
                </div>
            </div>
            <div className='about-container'>
                <div className="about-image">
                    <img src={about3compress} alt="image" />
                </div>
                <div className="about-content">
                    <h6>
                        Personalized Solutions for Your Home
                    </h6>
                    <p>
                        Your dreams, our canvas. We crafts personalized solutions that mirror your vision. We listen, we innovate, and we tailor every project to reflect your individuality. Our commitment to creating spaces that resonate with you is what sets us apart in the world of interior design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;