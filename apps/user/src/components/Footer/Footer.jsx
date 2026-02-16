import React from 'react';
import './Footer.css';
import { FooterBranding, FooterLinks, FooterLocationMap, FooterBottom } from './components';
import { FOOTER_QUICK_LINKS, FOOTER_SPECIALTIES } from '../../assets';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-slate-900 text-white py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
                    <FooterBranding />
                    <FooterLinks
                        title='Quick Links'
                        links={FOOTER_QUICK_LINKS}
                    />
                    <FooterLinks
                        title='Specialties'
                        links={FOOTER_SPECIALTIES}
                    />
                    <FooterLocationMap />
                </div>
                <FooterBottom currentYear={currentYear} />
            </div>
        </footer>
    );
};

export default Footer;
