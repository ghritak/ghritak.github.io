import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';

const Toast = ({ setShowToast, toast }) => {
  return (
    <div className='fixed flex items-center justify-between top-10 xl:top-auto xl:bottom-10 left-6 xl:left-10 right-6 xl:right-auto bg-zinc-900 py-3 px-4 rounded-lg min-w-64'>
      <span className='flex items-center gap-2'>
        <GoCheckCircleFill className='text-lg' /> {toast}
      </span>
      <div
        onClick={() => setShowToast(null)}
        className='cursor-pointer hover:bg-zinc-600 p-1 rounded-full'
      >
        <IoClose className='text-lg' />
      </div>
    </div>
  );
};

export default Toast;
