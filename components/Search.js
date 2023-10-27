'use client';
import axios from 'axios';
import React, { useState } from 'react';

function MagnifyingGlass({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function Search() {
  const [results, setResults] = useState([]);
  const [text, setText] = useState([]);
  const [visible, setVisible] = useState(false);
  const inputChange = e => {
    setText(e.target.value);
    axios
      .get('/api/search', { params: { title: e.target.value } })
      .then(a => {
        setResults(a?.data?.data);
      })
      .catch(e => console.log(e));
  };
  return (
    <div className="w-full relative flex items-center gap-8 border border-gray-400 border-1 rounded-full py-2 text-color shadow sm:w-[400px] sm:gap-6 md:px-8 ease-in-out duration-300">
      <input className="w-full bg-transparent focus:outline-none" onBlur={() => setVisible(false)} onFocus={() => setVisible(true)} value={text} placeholder="Search for a manga..." onChange={inputChange} />
      <MagnifyingGlass className="w-[25px] h-[25px]" />
      {visible && results?.length > 0 && text?.length > 0 && (
        <div className="absolute bottom-0 left-0 translate-y-[101%] bg-gray-600 h-[500px] w-[500px] rounded-xl p-3">
          {results?.map(i => (
            <div key={i?.attributes?.id}>{i?.attributes?.title?.en}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
