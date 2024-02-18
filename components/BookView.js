'use client';
import Image from 'next/image';
import React from 'react';

function BookView({ data }) {
  console.log(data);
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {data?.chapter?.data?.map(chapter => (
        <div className="w-[40vw] aspect-[3/5] relative" key={chapter}>
          <Image src={`${data?.baseUrl}/data/${data?.chapter?.hash}/${chapter}`} fill />
        </div>
      ))}
    </div>
  );
}

export default BookView;
