import React from 'react';

const AboutFeature = ({ icon, number, title, description }) => {
    return (
        <div className='about-feature'>
            <div className='about-feature-icon'>
                {number ? (
                    <span className='font-black'>{number}</span>
                ) : (
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        {icon}
                    </svg>
                )}
            </div>
            <div>
                <h4 className='about-feature-title'>{title}</h4>
                <p className='about-feature-description'>{description}</p>
            </div>
        </div>
    );
};

export default AboutFeature;
