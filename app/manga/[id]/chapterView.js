import React from 'react';

function ChapterView({ data }) {
  return (
    <div className="md:pr-10 md:py-6">
      {Object.entries(data).map(([key, value]) => {
        return (
          <div key={key}>
            <h1>{key}</h1>
            <p>{JSON.stringify(value)}</p>
          </div>
          
        );
      })}
    </div>
  );
}

export default ChapterView;
