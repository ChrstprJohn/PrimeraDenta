import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const FooterLocationMap = () => {
    return (
        <div>
            <h4 className='footer-heading'>Find Us</h4>
            <div className='map-container'>
                <iframe
                    title='Primera Denta Location'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.286391483981!2d121.0425!3d14.667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7070198e3b3%3A0x6734139e80e556e8!2sTandang%20Sora%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1709212000000!5m2!1sen!2sph'
                    className='map-iframe'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                />
                <div className='map-overlay' />
            </div>
            <div className='mt-4 flex items-start space-x-3 text-slate-400 text-xs'>
                <MapPinIcon className='w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5' />
                <p className='leading-tight'>
                    7 Himalayan Rd, Tandang Sora, Quezon City, Metro Manila
                </p>
            </div>
        </div>
    );
};

export default FooterLocationMap;
