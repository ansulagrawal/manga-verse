import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const genereColor = {
  romance: 'bg-red-200 text-red-700',
  comedy: 'bg-orange-200 text-orange-700',
  'slice of life': 'bg-green-200 text-green-700',
};

function Card({ title, desc, author, genere, time, volume, chapter }) {
  console.log(dayjs(time).fromNow(), 'time');
  return (
    <div className="relative flex bg-gray-800 h-[200px] text-white p-3 mx-3 rounded-xl justify-between mb-5">
      <div className="relative w-[200px] aspect-[2/3]">
        <Image
          className="pointer-events-none select-none"
          src="https://mangadex.org/covers/cdfa03bf-ae04-48b3-835c-997ee981ecb9/f7698e47-95a3-4043-bd53-e0082a012d62.jpg.512.jpg"
          alt="Fetched Image"
          fill
        />
      </div>
      <div className="ml-5">
        <b className="text-xl line-clamp-1">{title}</b>
        <p className="text-sm text-gray-200 mb-2">Author: {author}</p>
        {
          <p className="text-sm text-gray-200 mb-2">
            Vol:{volume}, Chapter:{chapter}
          </p>
        }
        <p className="text-sm text-gray-400 mb-2 line-clamp-3">{desc}</p>
        <div className="flex flex-wrap gap-1">
          {genere?.slice(0, 4)?.map(g => (
            <div className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3  py-1 rounded-full ${genereColor[g.toLowerCase()]}`} key={g}>
              {g}
            </div>
          ))}
        </div>
        {/* {time && <div className="absolute bottom-0 right-0">{dayjs().diff(time)}</div>} */}
      </div>
    </div>
  );
}

export default Card;
