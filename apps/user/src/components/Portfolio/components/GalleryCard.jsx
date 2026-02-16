import React from 'react';

const GalleryCard = ({ image, tags, classes }) => {
    return (
        <div className={`portfolio-card group ${classes}`}>
            <img
                src={image}
                alt={`Patient Smile`}
                className='portfolio-card-img'
            />
            <div className='portfolio-card-overlay'></div>

            <div className='portfolio-card-tags'>
                {tags.map((tag, tIdx) => (
                    <span
                        key={tIdx}
                        className='portfolio-tag'
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default GalleryCard;
