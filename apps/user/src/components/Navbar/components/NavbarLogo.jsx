import React from 'react';
import { BRANDING } from '../../../assets';

const NavbarLogo = ({ onGoHome }) => {
    return (
        <div
            className='flex items-center space-x-2 flex-shrink-0 cursor-pointer'
            onClick={onGoHome}
        >
            <div className='relative w-10 h-10'>
                <img
                    src={BRANDING.logoUrl}
                    alt={BRANDING.logoAlt}
                />
            </div>
            <span className='font-brand font-extrabold text-xl tracking-tighter text-slate-900'>
                <span className='text-slate-400'>{BRANDING.companyNameParts.first}</span>{' '}
                <span className='text-sky-500'>{BRANDING.companyNameParts.second}</span>
            </span>
        </div>
    );
};

export default NavbarLogo;
