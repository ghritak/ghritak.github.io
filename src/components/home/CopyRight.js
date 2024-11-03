import React from 'react';

const CopyRight = () => {
  return (
    <div className='flex flex-col justify-center items-center text-white gap-1 pb-20 xl:pb-10'>
      <p>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
      <p>By Ghritak</p>
    </div>
  );
};

export default CopyRight;
