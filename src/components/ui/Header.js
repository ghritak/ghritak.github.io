import React from 'react';

const Header = ({ title }) => {
  return (
    <h1 className='text-3xl xl:text-6xl font-serif font-bold text-white'>
      {title}
    </h1>
  );
};

export default Header;
