import React, { useLayoutEffect, useState } from 'react';
import NavbarButton from './NavbarButton';
import { scrollToSection } from '../../utils/scroll';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = ({ view, currentIndex }) => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState(view);

  useLayoutEffect(() => {
    if (currentView) scrollToSection(currentView)
  }, [currentView])

  const handleClick = (view) => {
    const params = new URLSearchParams();
    params.set('view', view);
    navigate(`?${params.toString()}`);
    scrollToSection(currentView)
    setCurrentView(view);
  }

  return (
    <div className='fixed bottom-4 xl:bottom-auto xl:-top-4 sm:pt-10 z-50'>
      <header className='flex justify-center items-center w-screen'>
        <div className={`flex flex-row justify-around w-full max-w-sm mx-5 xl:max-w-2xl rounded-full py-3 xl:py-4 transition-all duration-300 ${(currentIndex === 0) ? '' : 'bg-[#232322]'}`}>
          <NavbarButton onClick={() => handleClick('home')}>
            Home
          </NavbarButton>
          <NavbarButton onClick={() => handleClick('about')}>
            About
          </NavbarButton>
          <NavbarButton onClick={() => handleClick('projects')}>
            Projects
          </NavbarButton>
          <NavbarButton onClick={() => handleClick('contact')}>
            Contact
          </NavbarButton>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
