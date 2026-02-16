import React from 'react';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../../../assets';

const ServicesList = ({ onBookNow }) => {
    return (
        <div className='services-grid'>
            {SERVICES.map((service, idx) => (
                <ServiceCard
                    key={idx}
                    title={service.title}
                    desc={service.desc}
                    image={service.image}
                    onBookNow={onBookNow}
                />
            ))}
        </div>
    );
};

export default ServicesList;
