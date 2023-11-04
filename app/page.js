import Card from '@/components/MainCards';
import React from 'react';
import Crousel from '@/components/Crousel';
import getData from '@/helpers/api';
import Link from 'next/link';

async function Home() {
  const popularData = await getData('api/most-popular');
  const seasonalData = await getData('api/seasonal');
  const recentlyUdated = await getData('api/latest-updates');

  return (
    <section className="px-4">
      {/* --------------- Most Popular ---------------------- */}
      <div className="flex px-4 flex-wrap justify-between place-items-center my-2">
        <h3 className="md:text-3xl font-bold text-white ">Most Popular</h3>
        <Link href="#" className='text-white select-none cursor-pointer text-xl'>show more &gt;</Link>
      </div>
      <Crousel autoPlay showDots keyBoardControl>
        {popularData.map(i => (
          <Card
            key={i.id}
            {...{
              title:
                i?.attributes?.title?.en ||
                i?.attributes?.title[Object.keys(popularData?.[0]?.attributes?.title)?.[0]] ||
                i?.attributes?.altTitles?.[0]?.[Object.keys(i?.attributes?.altTitles?.[0])?.[0]],
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.find(t => t.type === 'author')?.attributes?.name,
              imageUrl: i.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName,
              id: i.id,
            }}
          />
        ))}
      </Crousel>

      {/* --------------- Latest Updeted ---------------------- */}
      <div className="flex px-4 flex-wrap align-middle justify-between place-items-center mb-2 mt-20">
        <h3 className="md:text-3xl font-bold text-white ">Latest Updeted</h3>
        <Link href="#" className='text-white select-none cursor-pointer text-xl'>show more &gt;</Link>
      </div>
      <Crousel autoPlay showDots keyBoardControl>
        {recentlyUdated.map(i => (
          <Card
            key={i}
            {...{
              title:
                i?.attributes?.title?.en ||
                i?.attributes?.title[Object.keys(popularData?.[0]?.attributes?.title)?.[0]] ||
                i?.attributes?.altTitles?.[0]?.[Object.keys(i?.attributes?.altTitles?.[0])?.[0]],
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.find(t => t.type === 'author')?.attributes?.name,
              imageUrl: i.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName,
              id: i.id,
              time: i.attributes?.updatedAt,
              volume: i?.attributes?.lastVolume,
              chapter: i?.attributes?.lastChapter,
              height: '400px',
            }}
          />
        ))}
      </Crousel>

      {/* --------------- Seasonal ---------------------- */}
      <div className="flex px-4 flex-wrap align-middle justify-between place-items-center mb-2 mt-20">
        <h3 className="md:text-3xl font-bold text-white">Seasonal Update</h3>
        <Link href="#" className='text-white select-none cursor-pointer text-xl'>show more &gt;</Link>
      </div>
      <Crousel autoPlay showDots keyBoardControl>
        {seasonalData.map(i => (
          <Card
            key={i}
            {...{
              title:
                i?.attributes?.title?.en ||
                i?.attributes?.title[Object.keys(popularData?.[0]?.attributes?.title)?.[0]] ||
                i?.attributes?.altTitles?.[0]?.[Object.keys(i?.attributes?.altTitles?.[0])?.[0]],
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.find(t => t.type === 'author')?.attributes?.name,
              imageUrl: i.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName,
              id: i.id,
              height: '100px',
              imageMinWidth: '100px',
            }}
          />
        ))}
      </Crousel>
    </section>
  );
}

export default Home;
