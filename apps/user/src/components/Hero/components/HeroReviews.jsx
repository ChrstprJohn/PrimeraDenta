import React from 'react';

const HeroReviews = () => {
    return (
        <div className='mt-12 flex items-center space-x-8'>
            <div className='flex -space-x-3'>
                {[1, 2, 3, 4].map((i) => (
                    <img
                        key={i}
                        src={`https://picsum.photos/seed/${i + 10}/100`}
                        className='hero-review-avatar'
                        alt='Reviewer'
                    />
                ))}
            </div>
            <div>
                <div className='hero-rating'>
                    {[1, 2, 3, 4, 5].map((s) => (
                        <svg
                            key={s}
                            className='w-4 h-4 fill-current'
                            viewBox='0 0 20 20'
                        >
                            <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                        </svg>
                    ))}
                </div>
                <p className='hero-review-text'>Trusted by 2,000+ Happy Patients</p>
            </div>
        </div>
    );
};

export default HeroReviews;
