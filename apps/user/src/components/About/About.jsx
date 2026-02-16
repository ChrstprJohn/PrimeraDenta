import React from 'react';
import './About.css';
import { AboutHeader, AboutFeatures, AboutImage } from './components';

const About = () => {
    return (
        <div
            id='about'
            className='about-container'
        >
            <div className='about-content'>
                <div className='about-grid'>
                    {/* Left: Text Content */}
                    <div className='order-2 lg:order-1'>
                        <AboutHeader />
                        <AboutFeatures />
                    </div>

                    {/* Right: Clinic Image */}
                    <div className='order-1 lg:order-2'>
                        <AboutImage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
