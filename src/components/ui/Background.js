import React, { useLayoutEffect, useState } from 'react';
import CircleLines from '../CircleLines';

const Background = ({ children, currentIndex }) => {
    const [viewportWidth, setViewportWidth] = useState(35);
    const screenWidth = window.innerWidth;
    console.log(screenWidth)

    useLayoutEffect(() => {
        if (currentIndex === 0) screenWidth > 800 ? setViewportWidth(100) : setViewportWidth(50)
        else screenWidth > 800 ? setViewportWidth(70) : setViewportWidth(35)
    }, [currentIndex, setViewportWidth, screenWidth])

    const dynamicSize = `clamp(200px, ${viewportWidth}vh, 1000vh)`;

    return (
        <div className='relative'>
            <div className='fixed w-screen h-screen pointer-events-none'>
                <div className="variant relative flex">
                    <div className="w-1/2 h-screen fixed top-0 bottom-0 -right-40 flex flex-col justify-center items-center -z-10 bg-image bg-image--blur slow-pulse" style={{ width: dynamicSize, height: dynamicSize }} />
                    <div className="w-1/2 h-screen opacity-10">
                        <CircleLines currentIndex={currentIndex} />
                    </div>
                </div>
            </div>
            <div className='w-full h-full pt-[80px]'>
                {children}
            </div>
        </div>
    );
};

export default Background;
