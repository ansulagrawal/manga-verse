'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import image from '../public/default.jpeg';
import starImage from '../public/star.png';
import followImage from '../public/bookmark.png';
import commentImage from '../public/comment.png';
import genereColor from '@/config/genereColor';

function SearchCard({ title, genere, handleClick, author, id, imageUrl, rating, followCount, comments }) {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <Link href={`manga/${id}`}>
      <div onClick={handleClick} className={`relative flex bg-gray-800 group h-[180px] text-white p-3 hover:bg-slate-700 rounded-xl`}>
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
