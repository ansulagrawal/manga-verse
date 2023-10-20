import Card from '@/components/Card';
import React from 'react';
import Crousel from '@/components/Crousel';
import axios from 'axios';

async function Home() {
  const getData = async url => {
    const popularRes = await axios.get(`${process.env.BASE_URL}/${url}`);
    return popularRes?.data?.data || [];
  };

  const popularData = await getData('api/most-popular');
  const seasonalData = await getData('api/seasonal');
  const recentlyUdated = await getData('api/latest-updates');

  return (
    <>
      {/* --------------- Most Popular ---------------------- */}
      <h3 className="text-xl font-bold mb-2">Most Popular</h3>
      <Crousel autoPlay>
        {popularData.map(i => (
          <Card
            key={i.id}
            {...{
              title: i?.attributes?.title?.en,
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
      <h3 className="text-xl font-bold my-2">Latest Updeted</h3>
      <Crousel>
        {recentlyUdated.map(i => (
          <Card
            key={i}
            {...{
              title: i?.attributes?.title?.en,
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.filter(t => t.type === 'author')?.[0]?.attributes?.name,
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
      <h3 className="text-xl font-bold my-2">Seasonal Update</h3>
      <Crousel autoPlay>
        {seasonalData.map(i => (
          <Card
            key={i}
            {...{
              title: i?.attributes?.title?.en,
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.filter(t => t.type === 'author')?.[0]?.attributes?.name,
              imageUrl: i.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName,
              id: i.id,
              height: '100px',
              imageMinWidth: '100px',
            }}
          />
        ))}
      </Crousel>
    </>
  );
}

export default Home;
