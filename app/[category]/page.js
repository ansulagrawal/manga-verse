import Card from '@/components/MainCards';
import getData from '@/helpers/api';
import Link from 'next/link';
import React from 'react';

async function CategoryDisplay({ params }) {
  const data = await getData(`/api/${params?.category}?limit=50`);
  console.log(data);
  return (
    <div className="px-4">
      <div className="text-white text-4xl relative font-bold m-5 flex place-items-center gap-3 justify-center">
        <Link
          href="/"
          className="p-3 bg-slate-600 absolute hover:text-cyan-400 rounded-full flex place-items-center gap-3 h-[40px] w-[40px] overflow-hidden hover:w-auto left-0">
          <span className="text-sm">←</span>
          <span className="text-base px-1">back</span>
        </Link>
        <div className="capitalize">{params?.category?.split('-').join(' ')}</div>
      </div>
      <div className="grid grid-cols-4 gap-y-6">
        {data.map(i => (
          <Card
            key={i.id}
            {...{
              title: i?.attributes?.title?.en || i?.attributes?.altTitles?.[0]?.[Object.keys(i?.attributes?.altTitles?.[0])?.[0]],
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.find(t => t.type === 'author')?.attributes?.name,
              imageUrl: i.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName,
              id: i.id,
              time: i.attributes?.updatedAt,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryDisplay;
