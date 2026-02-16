import React from 'react';

const CTABanner = ({ onBookNow }) => {
    return (
        <div className='servicesv2-cta-banner'>
            <div className='servicesv2-cta-content'>
                <div className='servicesv2-cta-icon'>
                    <svg
                        className='w-7 h-7'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        ></path>
                    </svg>
                </div>
                <div className='servicesv2-cta-text'>
                    <p className='servicesv2-cta-title'>Start Your Journey Today</p>
                    <p className='servicesv2-cta-subtitle'>
                        Book a comprehensive 3D scan and diagnostic
                    </p>
                </div>
            </div>
            <button
                onClick={onBookNow}
                className='servicesv2-cta-button'
            >
                Get Started
            </button>
        </div>
    );
};

export default CTABanner;
