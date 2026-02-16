import React from 'react';
import { DEFAULT_ABOUT_PICTURE } from '../../../assets';

const HeroBackground = () => {
    return (
        <div className='absolute inset-0 z-0'>
            <img
                src={
                    'https://picsum.photos/id/121/1920/1080' ||
                    DEFAULT_ABOUT_PICTURE ||
                    'DEFAULT_ABOUT_PICTURE'
                }
                alt='Dental Office'
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent'></div>
        </div>
    );
};

export default HeroBackground;
