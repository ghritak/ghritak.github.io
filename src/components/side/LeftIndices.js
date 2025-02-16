import React, { useCallback, useEffect, useState } from 'react';
import { getPosition } from '../../utils/scroll';

const sections = ['home', 'about', 'projects', 'contact'];

const LeftIndices = ({ setViewportWidth, currentIndex, setCurrentIndex }) => {
  const [sectionHeights, setSectionHeights] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (currentIndex === 0) setViewportWidth(50)
    else setViewportWidth(35)
  }, [currentIndex, setViewportWidth])

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    const newIndex = sectionHeights.findIndex((height, index) => {
      const nextHeight = sectionHeights[index + 1] || Infinity;
      return scrollY >= height && scrollY < nextHeight;
    });

    setCurrentIndex(newIndex !== -1 ? newIndex : sectionHeights.length - 1);
  }, [sectionHeights, setCurrentIndex]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionHeights, handleScroll]);

  useEffect(() => {
    const positions = sections.map((id) => getPosition(id));
    setSectionHeights(positions);
  }, []);

  return (
    <>
      <div className='fixed h-screen text-white justify-center items-center hidden xl:flex flex-col bottom-0 left-20 z-20'>
        <div className='-rotate-90 pl-2'>{currentIndex}</div>
        <div
          className='w-[2px] bg-zinc-600 rounded-lg items-end flex'
          style={{ height: 160 }}
        >
          <div
            className='bg-white h-10'
            style={{
              height: `${(currentIndex + 1) * 40}px`,
              transition: 'height 0.3s ease',
              width: '2px',
            }}
          />
        </div>
        <div className='-rotate-90 pr-2'>{sectionHeights.length - 1}</div>
      </div>
      <div className='xl:hidden bottom-0 h-[2px] w-full bg-zinc-600 rounded-lg items-end fixed z-20'>
        <div
          className='bg-white h-10'
          style={{
            width: `${(currentIndex + 1) * 25}%`,
            transition: 'width 0.3s ease',
            height: '2px',
          }}
        />
      </div>
    </>
  );
};

export default LeftIndices;
