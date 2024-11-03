import React from 'react';
import { links, mobileLinks } from './constants';
import { IoIosArrowDown } from 'react-icons/io';

const RightLinks = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className='fixed h-screen justify-end items-center hidden xl:flex flex-col bottom-0 right-20 z-20'>
        {links.map((item, id) => {
          return (
            <a key={id} href={item.url} target='blank'>
              <div
                className={`p-4 bg-${item.background} shadow-md rounded-full m-3 cursor-pointer hover:scale-125 transition-all duration-300`}
              >
                {item.icon}
              </div>
            </a>
          );
        })}
        <div className='w-[2px] bg-gray-300 rounded-lg h-1/3 mt-4' />
      </div>
      <div className='fixed h-2/3 xl:hidden flex-col justify-center top-4 right-4 z-20'>
        <div
          onClick={() => setOpen(!open)}
          className={`p-3 bg-zinc-600 shadow-md rounded-full m-2 cursor-pointer focus:bg-red-300 transition-all duration-300`}
        >
          <IoIosArrowDown
            size={20}
            color='white'
            className={`${open && 'rotate-180'} transition-all duration-300`}
          />
        </div>

        <div
          className={`${
            open ? 'h-full' : 'h-0'
          } overflow-hidden transition-all duration-300`}
        >
          <div className='h-1/4 flex justify-center'>
            <div className='w-[2px] bg-gray-300 rounded-lg h-full' />
          </div>
          {mobileLinks.map((item, id) => {
            return (
              <a key={id} href={item.url} target='blank'>
                <div
                  className={`p-3 bg-${item.background} shadow-md rounded-full m-2 cursor-pointer flex justify-center items-center focus:scale-125 transition-all duration-300`}
                >
                  {item.icon}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RightLinks;
