import React from 'react';

const FooterBottom = ({ currentYear }) => {
    return (
        <div className='pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm'>
            <p>© {currentYear} Primera Denta Clinic. All Rights Reserved.</p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
                <a
                    href='#privacy'
                    className='hover:text-white transition-colors'
                >
                    Privacy Policy
                </a>
                <a
                    href='#terms'
                    className='hover:text-white transition-colors'
                >
                    Terms of Service
                </a>
            </div>
        </div>
    );
};

export default FooterBottom;
