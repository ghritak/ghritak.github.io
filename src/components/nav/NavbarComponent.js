import React, { useCallback, useEffect, useState } from 'react';
import NavbarButton from './NavbarButton';
import { scrollToSection } from '../../utils/scroll';

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY <= 50 && isScrolled) {
      setIsScrolled(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='fixed bottom-4 xl:bottom-auto xl:-top-4 sm:pt-10 rounded-bl-custom rounded-br-custom z-50'>
      <header className='flex justify-center items-center w-screen'>
        <div
          className={`flex flex-row justify-around w-full max-w-sm mx-5 xl:max-w-2xl transition-all duration-300 ${
            isScrolled ? 'bg-zinc-900' : 'bg-zinc-900 xl:bg-zinc-800'
          } rounded-full py-3 xl:py-4`}
        >
          <NavbarButton onClick={() => scrollToSection('home')}>
            Home
          </NavbarButton>
          <NavbarButton onClick={() => scrollToSection('about')}>
            About
          </NavbarButton>
          <NavbarButton onClick={() => scrollToSection('projects')}>
            Projects
          </NavbarButton>
          <NavbarButton onClick={() => scrollToSection('contact')}>
            Contact
          </NavbarButton>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
