import React from 'react';

const HeroHeadline = () => {
    return (
        <div className='max-w-2xl'>
            {/* <span className='hero-badge'>Welcome to Primera Denta</span> */}
            <h1 className='hero-title'>
                Your Smile Is Our <span className='text-sky-500'>First Priority.</span>
            </h1>
            <p className='hero-description'>
                Experience world-class dental care with state-of-the-art technology and a team
                dedicated to your oral health and aesthetic goals.
            </p>
        </div>
    );
};

export default HeroHeadline;
