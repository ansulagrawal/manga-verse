import React from 'react';
import Select from './Select';

function Navbar() {
  const options = (size) => Array.from({ length: size }, (_, i) => `${i + 1} option`);

  return (
    <div className="bg-gray-800 h-[80px] z-10 top-0 fixed left-0 right-0 flex items-center justify-center text-white">
      <Select title="Type" options={options(50)} />
      <Select title="Type" options={options(10)} />
      <Select title="Type" options={options(15)} />
      <Select title="Type" options={options(25)} />
      <Select title="Type" options={options(30)} />
    </div>
  );
}

export default Navbar;
