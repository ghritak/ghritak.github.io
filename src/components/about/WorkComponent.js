import React from 'react';
import { work } from '../constants/work';
import WorkCard from './WorkCard';
import Header from '../ui/Header';

const WorkComponent = () => {
  return (
    <div className='xl:mx-56 flex relative xl:px-20 px-6 xl:py-28'>
      <div className='flex flex-row min-h-screen xl:space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-10 xl:space-y-20'>
            <Header title={'Work History'} />
            <div className='flex flex-row space-x-5'>
              <div className='text-white'>
                {work.map((item, index) => (
                  <WorkCard
                    key={index}
                    item={item}
                    isLine={index !== work.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
