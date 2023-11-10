import getData from '@/helpers/api';
import Image from 'next/image';
import React from 'react';
import StarIcon from '../../../public/star.png';
import BookmarkIcon from '../../../public/bookmark.png';
import CommentIcon from '../../../public/comment.png';
import formatCount from '@/helpers/number-formatter';
import { genereColor } from '@/config/default';

async function Manga({ params }) {
  const detail = await getData(`api/manga/${params?.id}`);
  const statics = await getData(`api/statistics?manga[]=${params?.id}`);
  const imageUrl = detail.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName;
  return (
    <section>
      <div className="relative h-fit flex flex-col lg:flex-row p-5 gap-11">
        <Image
          className="pointer-events-none select-none object-cover object-[25%_25%] opacity-10"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/covers/${params?.id}/${imageUrl}`}
          alt="Cover Image"
          fill
          loading="lazy"
        />
        <div className="aspect-[3/4] max-w-[300px] relative object-cover h-[400px] rounded-xl">
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
          <div className="font-bold text-3xl text-white">
            {detail?.attributes?.altTitles?.find(obj => detail?.attributes?.originalLanguage in obj)?.[detail?.attributes?.originalLanguage]}
          </div>
          <div className="font-bold text-xl text-white">{detail.relationships?.find(t => t.type === 'author')?.attributes?.name}</div>
          <div className="flex flex-wrap gap-1">
            {detail.attributes.tags
              .map(tag => tag.attributes.name.en)
              ?.map(g => (
                <div
                  className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3  py-1 rounded-full ${genereColor[g.toLowerCase()] || genereColor.default}`}
                  key={g}>
                  {g}
                </div>
              ))}
          </div>
          <div className="font-bold text-lg text-white flex gap-5">
            <div className="flex place-items-center">
              <Image alt="rating" src={StarIcon} className="w-6 h-6" />
              <span>{Number(statics?.[params?.id]?.rating?.average)?.toFixed(2)}</span>
            </div>
            <div className="flex place-items-center">
              <Image alt="follows" src={BookmarkIcon} className="w-6 h-6" />
              <span>{formatCount(statics?.[params?.id]?.follows)}</span>
            </div>
            <div className="flex place-items-center">
              <Image alt="comment" src={CommentIcon} className="w-6 h-6" />
              <span>{formatCount(statics?.[params?.id]?.comments?.repliesCount)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10 flex flex-col gap-5">
        <div className="flex flex-col gap-5 ">
          <div className="text-2xl text-white">{detail?.attributes?.description?.en}</div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-1/3 bg-slate-400 h-[500px]"></div>
          <div className="xl:w-2/3 bg-slate-700 h-[500px]"></div>
        </div>
      </div>
    </section>
  );
}

export default Manga;
