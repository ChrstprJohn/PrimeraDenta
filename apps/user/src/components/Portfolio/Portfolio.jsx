import React from 'react';
import './Portfolio.css';
import { PortfolioHeader, GalleryGrid } from './components';

const Portfolio = () => {
    return (
        <section
            id='portfolio'
            className='portfolio-container'
        >
            <div className='portfolio-content'>
                <PortfolioHeader />
                <GalleryGrid />
            </div>
        </section>
    );
};

export default Portfolio;
