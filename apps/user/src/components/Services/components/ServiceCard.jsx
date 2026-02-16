import React from 'react';

const ServiceCard = ({ title, desc, image, onBookNow }) => {
    return (
        <div className='services-card'>
            <div className='services-card-image'>
                <img
                    src={image}
                    alt={title}
                    className='services-card-img'
                />
                <div className='services-card-overlay'></div>
            </div>
            <div className='services-card-content'>
                <h3 className='services-card-title'>{title}</h3>
                <p className='services-card-desc'>{desc}</p>
                {/* <button
                    onClick={onBookNow}
                    className='services-card-button'
                >
                    Book Specialist
                </button> */}
            </div>
        </div>
    );
};

export default ServiceCard;
