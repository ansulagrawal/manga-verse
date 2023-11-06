'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import image from '../public/default.jpeg';
import starImage from '../public/star.png';
import followImage from '../public/bookmark.png';
import commentImage from '../public/comment.png';

const genereColor = {
  default: 'bg-gray-400 text-gray-700',
  romance: 'bg-red-200 text-red-700',
  comedy: 'bg-orange-200 text-orange-700',
  'slice of life': 'bg-green-200 text-green-700',
  drama: 'bg-cyan-800 text-cyan-200',
  action: 'bg-blue-200 text-blue-700',
  adventure: 'bg-purple-200 text-purple-700',
  fantasy: 'bg-pink-200 text-pink-700',
  isekai: 'bg-yellow-200 text-yellow-700',
  "girls' love": 'bg-amber-400 text-amber-800',
  sports: 'bg-blue-400 text-blue-800',
  crime: 'bg-red-400 text-red-800',
  psychological: 'bg-white text-black',
  horror: 'bg-rose-800 text-rose-200',
  'sci-fi': 'bg-emerald-400 text-emerald-700',
  historical: 'bg-lime-400 text-lime-700',
  thriller: 'bg-violet-800 text-violet-200',
  superhero: 'bg-fuchsia-800 text-fuchsia-200',
};

function SearchCard({ title, genere, handleClick, author, id, imageUrl, rating, followCount, comments }) {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <Link href={`manga/${id}`} onClick={handleClick}>
      <div className={`relative flex bg-gray-800 group h-[180px] text-white p-3 hover:bg-slate-700 rounded-xl`}>
        <div className="aspect-[7/8] object-cover group-hover:brightness-[0.6] relative h-full">
          <Image
            onError={() => setImageLoaded(false)}
            className="pointer-events-none select-none object-cover"
            src={imageLoaded ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/covers/${id}/${imageUrl}.256.jpg` : image}
            alt="Cover Image"
            fill
            loading="lazy"
          />
        </div>

        <div className="pl-5 w-full">
          <b className="text-xl break-all line-clamp-1">{title}</b>
          <p className="text-lg text-gray-200 mb-2">Author: {author}</p>

          <div className="flex gap-6 mb-2">
            <div className="text-md flex place-items-center justify-center gap-2 ">
              <Image src={starImage} width={20} height={20} alt="rating" />
              {Number(rating)?.toFixed(1)}
            </div>
            <div className="text-md flex place-items-center justify-center gap-2 ">
              <Image src={followImage} width={20} height={20} alt="rating" />
              <div className="text-md">{followCount}</div>
            </div>
            <div className="text-md flex place-items-center justify-center gap-2 ">
              <Image src={commentImage} width={20} height={20} alt="rating" />
              <div className="text-md">{comments}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-5">
            {genere?.slice(0, 4)?.map(g => (
              <div
                className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3  py-1 rounded-full ${genereColor[g.toLowerCase()] || genereColor.default}`}
                key={g}>
                {g}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchCard;
