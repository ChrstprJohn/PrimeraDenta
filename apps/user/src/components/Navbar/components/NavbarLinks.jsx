import React from 'react';

const NavbarLinks = ({ links, onNavClick }) => {
    return (
        <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                    className='navbar-link'
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default NavbarLinks;
