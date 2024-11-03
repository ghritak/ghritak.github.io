import React from 'react';
import { education } from '../constants/education';
import EducationCard from './EducationCard';
import Header from '../ui/Header';

const EducationComponent = () => {
  return (
    <div className='xl:mx-56 flex relative xl:px-20 px-6'>
      <div className='flex flex-row min-h-screen space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-10 xl:space-y-20'>
            <Header title='Education' />
            <div className='text-white'>
              {education.map((item, index) => (
                <EducationCard
                  key={index}
                  item={item}
                  isLine={index !== education.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
