import React from 'react';

const ListServiceCard = ({ title, index, onBookNow }) => {
    return (
        <div
            onClick={onBookNow}
            className='servicesv2-list-card'
        >
            <div className='servicesv2-list-card-content'>
                <span className='servicesv2-list-card-index'>{String(index).padStart(2, '0')}</span>
                <h3 className='servicesv2-list-card-title'>{title}</h3>
            </div>

            <div className='servicesv2-list-card-button'>
                <svg
                    className='w-6 h-6 md:w-8 md:h-8'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default ListServiceCard;
