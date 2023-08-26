import React from 'react'
import './hero.css'
import hero2compress from '../../assets/hero2compress.jpg'

const Hero = () => {
    return (
        <>
            <div className='hero'>
                <div className='hero'>
                    <div className="hero-image">
                        <img src={hero2compress} alt="image" />
                    </div>
                    <div className="hero-content ">
                        <div className='lufga-500'>
                            Interior <br /> that <br /> Inspires
                            <div className="button" >
                                <a href="#contact">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;