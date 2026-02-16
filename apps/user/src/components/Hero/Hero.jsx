import React from 'react';
import './Hero.css';
import { HeroBackground, HeroHeadline, HeroButtons, HeroReviews } from './components';

const Hero = ({ onBookNow }) => {
    return (
        <div
            id='home'
            className='hero-container'
        >
            <HeroBackground />

            <div className='hero-content'>
                <HeroHeadline />
                <HeroButtons onBookNow={onBookNow} />
                <HeroReviews />
            </div>
        </div>
    );
};

export default Hero;
