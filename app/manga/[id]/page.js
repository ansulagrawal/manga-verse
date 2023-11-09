import getData from '@/helpers/api';
import Image from 'next/image';
import React from 'react';
import StarIcon from '../../../public/star.png'
import BookmarkIcon from '../../../public/bookmark.png'
import CommentIcon from '../../../public/comment.png'
import formatCount from '@/helpers/number-formatter';

async function Manga({ params }) {
  const detail = await getData(`api/manga/${params?.id}`);
  const statics = await getData(`api/statistics?manga[]=${params?.id}`);
  const imageUrl = detail.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName;
  return (
    <section>
      <div className="relative h-[600px] flex p-5 gap-11">
        <Image
          className="pointer-events-none select-none object-cover object-[25%_25%] opacity-10"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/covers/${params?.id}/${imageUrl}`}
          alt="Cover Image"
          fill
          loading="lazy"
        />
        <div className="aspect-[3/4] object-cover relative h-[400px] rounded-xl">
          <Image
            className="pointer-events-none select-none object-cover rounded-xl"
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/covers/${params?.id}/${imageUrl}`}
            alt="Cover Image"
            fill
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="font-bold text-6xl text-white">
            {detail?.attributes?.title?.en || detail?.attributes?.altTitles?.[0]?.[Object.keys(detail?.attributes?.altTitles?.[0])?.[0]]}
          </div>
          <div className="font-bold text-xl text-white">{detail.relationships?.find(t => t.type === 'author')?.attributes?.name}</div>
          <div className="font-bold text-2xl text-white">{detail?.attributes?.description?.en}</div>
          <div className="font-bold text-2xl text-white flex gap-5">
            <div className='flex place-items-center'>
              <Image alt="rating" src={StarIcon} className='w-8 h-8' />
              <span>{Number(statics?.[params?.id]?.rating?.average)?.toFixed(2)}</span>
            </div>
            <div className='flex place-items-center'>
              <Image alt="follows" src={BookmarkIcon} className='w-8 h-8' />
              <span>{formatCount(statics?.[params?.id]?.follows)}</span>
            </div>
            <div className='flex place-items-center'>
              <Image alt="comment" src={CommentIcon} className='w-8 h-8' />
              <span>{formatCount(statics?.[params?.id]?.comments?.repliesCount)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Manga;
