import React from 'react';
import CurveLine from '../CurveLine';

const Background = ({ children, viewportWidth }) => {
    // Initial value for 35vw

    // Dynamic clamp calculation using state
    const dynamicStyle = {
        width: `clamp(200px, ${viewportWidth}vw, 1000px)`,
        height: `clamp(200px, ${viewportWidth}vw, 1000px)`
    };
    return (
        <div className=''>
            <div className='fixed -top-20 -right-40 flex flex-col justify-center items-center -z-10 pointer-events-none'>
                <div className="variant">
                    <div className="bg-image bg-image--blur" style={dynamicStyle} />
                    <div className="label" />
                </div>
            </div>
            {children}
            <div className='fixed bottom-0 -left-20 -z-10 pointer-events-none opacity-30'>
                <CurveLine />
            </div>
        </div>
    );
};

export default Background;
