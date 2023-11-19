import React from 'react';

function ChapterView({ data }) {
  return (
    <div className="md:pr-10 md:py-6">
      {data?.map(i => (
        <div key={i?.volume}>
          <div className="text-center">{i?.volume}</div>
        </div>
      ))}
      {/* {Object.entries(data).map(([key, value]) => {
        return (
          // <div key={key}>
          //   <h1>{key}</h1>
          //   <p>{JSON.stringify(value)}</p>
          // </div>

          // <div className="flex relative pb-12" key={key}>
          //   {key === 161 && console.log(value)}
          //   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          //     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          //   </div>
          //   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
          //     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          //       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          //     </svg>
          //   </div>
          //   <div className="flex-grow pl-4">
          //     <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Volume - {key}</h2>
          //     {value.map(item => (
          //       <div key={item.id} className="mb-2">
          //         <p>
          //           <span>CH-{item.attributes.chapter || ''}&nbsp;</span>
          //           {item.attributes.title || ''}
          //         </p>
          //       </div>
          //     ))}
          //   </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default ChapterView;
