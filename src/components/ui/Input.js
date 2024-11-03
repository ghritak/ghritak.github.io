import React from 'react';

const Input = (props) => {
  return (
    <input
      className='bg-zinc-700 p-3 rounded-lg border-[1px] border-zinc-500 w-full outline-none focus:border-zinc-400 transition-all duration-300 caret-white text-white'
      {...props}
    />
  );
};

export default Input;
