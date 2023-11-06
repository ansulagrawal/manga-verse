'use client';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import SearchCard from './SearchCard';
import Loading from './Loading';

function MagnifyingGlass({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function Search() {
  const [results, setResults] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState([]);
  const [visible, setVisible] = useState(false);
  const searchRef = useRef(null);
  const inputChange = e => {
    setText(e.target.value);
    setLoading(true);
    axios
      .get('/api/search', { params: { title: e.target.value } })
      .then(res => {
        setResults(res?.data?.data);
        let query = '';

        res?.data?.data.forEach((item, index) => {
          if (index === 0) {
            query += `manga[]=${encodeURIComponent(item?.id)}`;
          } else {
            query += `&manga[]=${encodeURIComponent(item?.id)}`;
          }
        });
        // axios
        //   .get(`/api/statistics?${query}`)
        //   .then(a => {
        //     setStatistics(a?.data?.data);
        //     setLoading(false);
        //   })
        //   .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  };

  const handleDocumentClick = event => {
    const searchResults = event.target.closest('.manga-search-results');
    if (searchRef.current && !searchRef.current.contains(event.target) && !searchResults) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className="w-full relative flex items-center gap-8 border border-gray-400 border-1 rounded-full py-2 text-color shadow sm:w-[400px] sm:gap-6 md:px-8 ease-in-out duration-300">
      <input className="w-full bg-transparent focus:outline-none" onFocus={() => setVisible(true)} value={text} placeholder="Search for a manga..." onChange={inputChange} />
      <MagnifyingGlass className="w-[25px] h-[25px]" />
      {visible && results?.length > 0 && text?.length > 0 && (
        <div className="absolute bottom-0 flex flex-col gap-3 overflow-auto left-0 translate-y-[101%] bg-gray-600 min-h-fit max-h-[700px] w-[700px] rounded-xl p-3 manga-search-results">
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {results?.map((i, index) => (
                  <SearchCard
                    handleClick={() => setVisible(false)}
                    key={index}
                    {...{
                      title: i?.attributes?.title?.en || i?.attributes?.altTitles?.[0]?.[Object.keys(i?.attributes?.altTitles?.[0])?.[0]],
                      comments: statistics[i?.id]?.comments?.repliesCount,
                      followCount: statistics[i?.id]?.follows,
                      rating: statistics[i?.id]?.rating?.average,
                      author: i.relationships?.find(t => t.type === 'author')?.attributes?.name,
                      genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
                      imageUrl: i.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName,
                      id: i.id,
                    }}
                  />
                ))}
              </>
            )}
          </>
        </div>
      )}
    </div>
  );
}

export default Search;