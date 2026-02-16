import React from 'react';
import ListServiceCard from './ListServiceCard';
import { SERVICES_V2 } from '../../../assets';

const ListServicesList = ({ onBookNow }) => {
    const listItems = SERVICES_V2.slice(5);

    return (
        <div className='servicesv2-list-container'>
            {listItems.map((service, idx) => (
                <ListServiceCard
                    key={idx + 5}
                    title={service.title}
                    index={idx + 6}
                    onBookNow={onBookNow}
                />
            ))}
        </div>
    );
};

export default ListServicesList;
