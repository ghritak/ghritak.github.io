import React from 'react';

const TextArea = (props) => {
  return (
    <textarea
      className='bg-zinc-700 p-3 rounded-lg border-[1px] border-zinc-500 w-full outline-none focus:border-zinc-400 transition-all duration-300 caret-white min-h-48 text-white'
      {...props}
    />
  );
};

export default TextArea;
