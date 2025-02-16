import React, { useEffect, useState } from 'react';
import { GoCheckCircleFill, GoAlert } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';

const initToast = { message: '', type: 'none' }

const Toast = ({ toast, setToast }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toast.message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3700);
    }
  }, [toast.message, setToast]);

  const hideToast = () => {
    setShow(false);
    setTimeout(() => {
      setToast(initToast);
    }, 300);
  };

  return (
    <div
      className={`fixed flex items-center justify-between z-50 top-auto bottom-10 left-6 xl:left-10 right-6 xl:right-auto py-3 px-4 rounded-lg min-w-64 
        ${show ? 'toast-enter' : 'toast-leave'}`}
      style={{ backgroundColor: toast.type === 'error' ? '#eb3c10' : '#0a9130' }}
    >
      <span className='flex items-center gap-2'>
        {toast.type === "success" ?
          <GoCheckCircleFill className='text-lg' /> :
          toast.type === 'error' ? <GoAlert className='text-sm' /> : null}
        {toast.message}
      </span>
      <div
        onClick={hideToast}
        className='cursor-pointer hover:scale-110 p-1 rounded-full transition-all duration-300'
      >
        <IoClose className='text-lg' />
      </div>
    </div>
  );
};

export default Toast;
