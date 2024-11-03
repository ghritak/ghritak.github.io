import React from 'react';
import LeftIndicator from './LeftIndicator';
import OrgLine from './OrgLine';

const EducationCard = ({ item, isLine }) => {
  return (
    <div className='flex flex-row'>
      <LeftIndicator isLine={isLine} />
      <div className='space-y-1 xl:space-y-3 mb-4'>
        <h1 className='text-lg xl:text-4xl font-bold font-serif text-slate-200'>
          {item.degree}
        </h1>
        <h1 className='text-lg xl:text-2xl font-semibold text-slate-300'>
          {item?.subject}
        </h1>
        <OrgLine name={`${item.institution}, ${item.year}`} />
      </div>
    </div>
  );
};

export default EducationCard;
