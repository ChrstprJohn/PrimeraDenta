import React, { useRef, useState, useEffect } from 'react';
import { DEFAULT_PROFILE_PICTURE } from '../../../assets';

const NavbarProfile = ({ user, onBookNow, onLogout, onGoDashboard }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClickOutside);
        return () => window.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className='flex items-center space-x-4'>
            <button
                onClick={onBookNow}
                className='navbar-cta'
            >
                BOOK NOW
            </button>

            {/* Profile Section with Dropdown */}
            <div
                className='relative'
                ref={dropdownRef}
            >
                <button
                    onClick={toggleDropdown}
                    className='navbar-profile-btn'
                >
                    <div
                        className={`navbar-profile-avatar ${user ? 'border-sky-500 shadow-md ring-4 ring-sky-50' : 'border-slate-200 grayscale opacity-80'}`}
                    >
                        <img
                            src={
                                user?.role === 'dentist'
                                    ? 'https://picsum.photos/seed/doc1/100'
                                    : user
                                      ? `https://picsum.photos/seed/${user.email}/200`
                                      : DEFAULT_PROFILE_PICTURE
                            }
                            alt='Profile'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    {user && (
                        <span className='navbar-profile-name'>{user.name?.split(' ')[0]}</span>
                    )}
                    <svg
                        className={`navbar-profile-chevron ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M19 9l-7 7-7-7'
                        ></path>
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className='navbar-dropdown'>
                        {user ? (
                            <div className='navbar-dropdown-header'>
                                <p className='navbar-dropdown-label'>Signed in as</p>
                                <p className='navbar-dropdown-email'>{user.email}</p>
                                <span className='navbar-dropdown-badge'>{user.role} Account</span>
                            </div>
                        ) : null}

                        {/* Role Based Navigation */}
                        <div className='navbar-dropdown-items'>
                            {!user ? (
                                <>
                                    <button
                                        onClick={onBookNow}
                                        className='navbar-dropdown-item'
                                    >
                                        <svg
                                            className='navbar-dropdown-icon'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                                            ></path>
                                        </svg>
                                        Login to Account
                                    </button>
                                    <button
                                        onClick={onBookNow}
                                        className='navbar-dropdown-item'
                                    >
                                        <svg
                                            className='navbar-dropdown-icon'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
                                            ></path>
                                        </svg>
                                        Create New Account
                                    </button>
                                </>
                            ) : (
                                <>
                                    {user.role === 'admin' || user.role === 'dentist' ? (
                                        <button
                                            onClick={onGoDashboard}
                                            className='navbar-dropdown-item'
                                        >
                                            <svg
                                                className='navbar-dropdown-icon'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2'
                                                    d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                                                ></path>
                                            </svg>
                                            Management Dashboard
                                        </button>
                                    ) : (
                                        <>
                                            <button className='navbar-dropdown-item'>
                                                <svg
                                                    className='navbar-dropdown-icon'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth='2'
                                                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                                                    ></path>
                                                </svg>
                                                My Account
                                            </button>
                                            <button className='navbar-dropdown-item'>
                                                <svg
                                                    className='navbar-dropdown-icon'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth='2'
                                                        d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z'
                                                    ></path>
                                                </svg>
                                                My Appointments
                                            </button>
                                        </>
                                    )}
                                    <div className='navbar-dropdown-divider'></div>
                                    <button
                                        onClick={onLogout}
                                        className='navbar-dropdown-item-logout'
                                    >
                                        <svg
                                            className='navbar-dropdown-icon'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                                            ></path>
                                        </svg>
                                        Sign Out
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarProfile;
