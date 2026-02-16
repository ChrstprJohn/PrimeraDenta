import React from 'react';

const HeroBackground = () => {
    return (
        <div className='absolute inset-0 z-0'>
            <img
                src='https://picsum.photos/id/121/1920/1080'
                alt='Dental Office'
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent'></div>
        </div>
    );
};

export default HeroBackground;
