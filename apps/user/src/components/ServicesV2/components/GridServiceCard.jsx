import React from 'react';

const GridServiceCard = ({ title, image, index, gridClasses, onBookNow }) => {
    return (
        <div
            onClick={onBookNow}
            className={`group servicesv2-grid-card ${gridClasses}`}
        >
            <img
                src={image}
                alt={title}
                className='servicesv2-grid-card-img'
            />

            <div className='servicesv2-grid-card-overlay-dark'></div>
            <div className='servicesv2-grid-card-overlay-gradient'></div>

            <div className='servicesv2-grid-card-index'>{String(index).padStart(2, '0')}</div>

            <div className='servicesv2-grid-card-button'>
                <svg
                    className='w-5 h-5 md:w-6 md:h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        d='M5 19L19 5m0 0H8m11 0v11'
                    ></path>
                </svg>
            </div>

            <div className='servicesv2-grid-card-title'>
                <h3
                    className={
                        index === 1
                            ? 'servicesv2-grid-card-title-large'
                            : 'servicesv2-grid-card-title-sm'
                    }
                >
                    {title}
                </h3>
            </div>
        </div>
    );
};

export default GridServiceCard;
