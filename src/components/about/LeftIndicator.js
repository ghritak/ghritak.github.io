import React from 'react';
import { IoCheckbox } from 'react-icons/io5';

const LeftIndicator = ({ isLine }) => {
  return (
    <div className='flex flex-col items-center mr-3 xl:mr-8'>
      <div className='bg-blue-300 p-[6px] xl:p-3 rounded-full'>
        <IoCheckbox className='text-blue-500 text-lg xl:text-2xl' />
      </div>
      <div className={`w-1 bg-blue-500 ${isLine ? 'h-full' : ''}`} />
    </div>
  );
};

export default LeftIndicator;
