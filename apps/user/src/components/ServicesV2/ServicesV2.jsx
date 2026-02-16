import React from 'react';
import './ServicesV2.css';
import { ServicesV2Header, GridServicesList, ListServicesList, CTABanner } from './components';

const ServicesV2 = ({ onBookNow }) => {
    return (
        <section
            id='services'
            className='servicesv2-container'
        >
            {/* Background Decor */}
            <div className='servicesv2-background-decor'></div>

            <div className='servicesv2-content'>
                <ServicesV2Header />
                <GridServicesList onBookNow={onBookNow} />
                <ListServicesList onBookNow={onBookNow} />
                {/* <CTABanner onBookNow={onBookNow} /> */}
            </div>
        </section>
    );
};

export default ServicesV2;
