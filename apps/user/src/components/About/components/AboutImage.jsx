import React from 'react';
import { DEFAULT_ABOUT_PICTURE } from '../../../assets';

const AboutImage = () => {
    return (
        <div className='relative'>
            <div className='absolute -top-10 -right-10 w-64 h-64 bg-sky-50 rounded-full z-0 opacity-60 blur-3xl'></div>
            <div className='about-image-container'>
                <img
                    src={
                        'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200' ||
                        DEFAULT_ABOUT_PICTURE
                    }
                    alt='Modern Dental Clinic Interior'
                    className='about-image'
                />
            </div>
        </div>
    );
};

export default AboutImage;
