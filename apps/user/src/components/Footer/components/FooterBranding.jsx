import React from 'react';
import { BRANDING } from '../../../assets';

const FooterBranding = () => {
    return (
        <div className='col-span-1'>
            <div className='flex items-center space-x-2 mb-6'>
                <div className='relative w-10 h-10'>
                    <img
                        src={BRANDING.logoUrl}
                        alt={BRANDING.logoAlt}
                    />
                </div>
                <span className='font-extrabold text-xl tracking-tighter'>
                    <span className='text-white'>PRIMERA</span>
                    <span className='text-sky-500'> DENTA</span>
                </span>
            </div>
            <p className='text-slate-400 leading-relaxed mb-6 text-sm'>
                Empowering communities with world-class dental solutions and compassionate care
                since 2008.
            </p>
            <div className='flex space-x-4'>
                {[1, 2, 3].map((i) => (
                    <a
                        key={i}
                        href='#'
                        className='social-icon'
                        aria-label='Social media link'
                    >
                        <div className='social-icon-inner' />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterBranding;
