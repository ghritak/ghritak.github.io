import React from 'react';
import { GoDotFill } from 'react-icons/go';

const OrgLine = ({ name, year }) => {
  return (
    <div className='xl:flex items-center font-medium space-y-1 xl:space-x-2'>
      <h2 className='text-sm xl:text-xl'>{name}</h2>
      <div className='hidden xl:block'>
        <GoDotFill color='white' />
      </div>
      <h2 className='text-sm xl:text-xl'>{year}</h2>
    </div>
  );
};

export default OrgLine;
