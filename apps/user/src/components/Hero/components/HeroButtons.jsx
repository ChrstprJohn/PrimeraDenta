import React from 'react';

const HeroButtons = ({ onBookNow }) => {
    return (
        <div className='flex flex-col sm:flex-row gap-4'>
            <button
                onClick={onBookNow}
                className='hero-button-primary'
            >
                Make an Appointment
            </button>
            <button className='hero-button-secondary'>Explore Services</button>
        </div>
    );
};

export default HeroButtons;
