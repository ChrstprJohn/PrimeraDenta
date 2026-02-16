import React from 'react';
import GalleryCard from './GalleryCard';
import { SMILE_GALLERY } from '../../../assets';

const GalleryGrid = () => {
    return (
        <div className='portfolio-grid-container'>
            {SMILE_GALLERY.map((item, idx) => (
                <GalleryCard
                    key={idx}
                    image={item.image}
                    tags={item.tags}
                    classes={item.classes}
                />
            ))}
        </div>
    );
};

export default GalleryGrid;
