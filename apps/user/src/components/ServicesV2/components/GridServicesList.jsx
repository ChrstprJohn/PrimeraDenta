import React from 'react';
import GridServiceCard from './GridServiceCard';
import { SERVICES_V2 } from '../../../assets';

const GridServicesList = ({ onBookNow }) => {
    const gridItems = SERVICES_V2.slice(0, 5);

    const getGridClasses = (index) => {
        switch (index) {
            case 0: // 01: Full width banner
                return 'col-span-2 md:col-span-4 h-[250px] md:h-[400px]';
            default: // 02-05: 4 Columns on desktop, 1 on mobile (grid-cols-2)
                return 'col-span-1 h-[280px] md:h-[420px]';
        }
    };

    return (
        <div className='servicesv2-grid'>
            {gridItems.map((service, idx) => (
                <GridServiceCard
                    key={idx}
                    title={service.title}
                    image={service.image}
                    index={idx + 1}
                    gridClasses={getGridClasses(idx)}
                    onBookNow={onBookNow}
                />
            ))}
        </div>
    );
};

export default GridServicesList;
