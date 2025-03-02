import React from 'react';

const CircleLines = ({ currentIndex }) => {
    const screenHeight = window.innerHeight;
    const isWrapped = currentIndex !== 0
    const size = isWrapped ? '1600' : '1200'

    return (
        <div style={{rotate: isWrapped ? '-18deg' : '0deg'}} >
            <svg width={size} height={size} viewBox="0 0 1200 1200">
                <g transform={`translate(${isWrapped ? '100' : '0'},-${screenHeight - 80})`} className='transition-all duration-300'>
                    <circle cx="1350" cy="1350" r="700" fill="none" stroke="#D9D9D9" strokeWidth="2" />
                    <circle cx="1350" cy="1350" r="850" fill="none" stroke="#D9D9D9" strokeWidth="2" />
                    <circle cx="1350" cy="1350" r="1000" fill="none" stroke="#D9D9D9" strokeWidth="2" />
                    <circle cx="1350" cy="1350" r="1150" fill="none" stroke="#D9D9D9" strokeWidth="2" />
                    <circle cx="1350" cy="1350" r="1300" fill="none" stroke="#D9D9D9" strokeWidth="2" />
                </g>
            </svg>
        </div>
    );
};

export default CircleLines;
