import React from 'react';

const TextArea = (props) => {
  return (
    <textarea
      className='bg-[#191918] p-3 rounded-xl border-[1px] border-zinc-700 w-full outline-none focus:border-zinc-400 hover:bg-[#232322] focus:bg-[#232322] transition-all duration-300 caret-white min-h-48 text-white'
      {...props}
    />
  );
};

export default TextArea;
