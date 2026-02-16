import React from 'react';

const FooterLinks = ({ title, links }) => {
    return (
        <div>
            <h4 className='footer-heading'>{title}</h4>
            <ul className='space-y-4'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.href}
                            className='footer-link'
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;
