import React from 'react';
import { scrollToSection } from '../../utils/scroll';
import Profile from '../../assets/my-image.jpg';

const IntroComponent = () => {
  return (
    <section className='justify-center flex relative h-screen py-28' id='home'>
      <div className='flex flex-col-reverse justify-center items-start xl:items-center mx-6 xl:mx-0 xl:flex-row xl:space-x-20'>
        <div className='text-white flex justify-center items-center'>
          <div className='max-w-xl space-y-5'>
            <p className='text-2xl'>Hi There, I am</p>
            <h1
              data-aos='fade-right'
              className='text-4xl xl:text-7xl font-bold font-serif'
            >
              GHRITAK
            </h1>
            <p>
              A software developer with a passion for creating exceptional
              digital experiences. Specializing in JS Frameworks and varoius
              tech stacks.
            </p>
            <div className='flex space-x-3'>
              <div
                onClick={() => scrollToSection('contact')}
                className='rounded-full px-8 py-2 cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 border-black border-[1.5px]'
              >
                Hire Me
              </div>
              <a
                href={`/Ghritak@Resume.pdf`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='rounded-full px-8 py-2 cursor-pointer bg-zinc-800  hover:bg-white hover:text-black  transition-all duration-300 border-[1.5px] border-white'>
                  Download CV
                </div>
              </a>
            </div>
          </div>
        </div>
        <div data-aos='zoom-in' className='mb-10 xl:mb-0'>
          <div className='rounded-full overflow-hidden hover:scale-105 transition-all duration-300'>
            <img
              src={Profile}
              alt='Profile'
              className='rounded-full w-[160px] h-[160px] xl:w-[400px] xl:h-[400px] '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroComponent;
