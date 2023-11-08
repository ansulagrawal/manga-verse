import React from 'react';

function CategoryDisplay({ params }) {
  return <div className='text-white'>{params?.category}</div>;
}

export default CategoryDisplay;
