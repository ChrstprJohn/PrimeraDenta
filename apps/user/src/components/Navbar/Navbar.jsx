import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavbarLogo, NavbarLinks, NavbarProfile } from './components';
import { NAV_LINKS } from '../../assets';

const Navbar = ({ onBookNow, user, onLogout, onGoHome, onGoDashboard, currentView }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        if (currentView.type !== 'home') {
            e.preventDefault();
            onGoHome();
            setTimeout(() => {
                const id = href.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-top'}`}>
            <div className='navbar-container'>
                <div className='navbar-content'>
                    <NavbarLogo onGoHome={onGoHome} />
                    <NavbarLinks
                        links={NAV_LINKS}
                        onNavClick={handleNavClick}
                    />
                    <NavbarProfile
                        user={user}
                        onBookNow={onBookNow}
                        onLogout={onLogout}
                        onGoDashboard={onGoDashboard}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
