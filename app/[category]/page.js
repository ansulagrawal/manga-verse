import React from 'react';

function CategoryDisplay({ params }) {
  return <div className='text-white capitalize'>{params?.category?.split('-').join(' ')}</div>;
}

export default CategoryDisplay;
