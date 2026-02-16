import React from 'react';
import './Services.css';
import { ServicesHeader, ServicesList } from './components';

const Services = ({ onBookNow }) => {
    return (
        <div className='services-container'>
            <div className='services-content'>
                <ServicesHeader />
                <ServicesList onBookNow={onBookNow} />
            </div>
        </div>
    );
};

export default Services;
