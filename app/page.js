import Card from '@/components/Card';
import React from 'react';
import Crousel from '@/components/Crousel';
import axios from 'axios';

async function getData() {
  const res = await axios.get(`${process.env.BASE_URL}/api/most-popular`);
  return res.data.data;
}

async function Home() {
  const data = (await getData()) || [];

  return (
    <>
      {/* --------------- Most Popular ---------------------- */}
      <h3 className="text-xl font-bold mb-2">Most Popular</h3>
      <Crousel autoPlay>
        {data.map(i => (
          <Card
            key={i.id}
            {...{
              title: i?.attributes?.title?.en,
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.find(t => t.type === 'author')?.attributes?.name,
              imageUrl: i.relationships?.find(t=> t.type === 'cover_art')?.attributes?.fileName,
              id: i.id,
            }}
          />
        ))}
      </Crousel>

      {/* --------------- Latest Updeted ---------------------- */}
      <h3 className="text-xl font-bold my-2">Latest Updeted</h3>
      <Crousel autoPlay>
        {data.map(i => (
          <Card
            key={i}
            {...{
              title: i?.attributes?.title?.en,
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.filter(t => t.type === 'author')?.[0]?.attributes?.name,
              imageUrl: i.relationships?.find(t=> t.type === 'cover_art')?.attributes?.fileName,
              id: i.id,
              time: '2023-10-19T07:29:30+00:00',
              volume: 10,
              chapter: 12,
              height: '400px',
            }}
          />
        ))}
      </Crousel>

      {/* --------------- Seasonal ---------------------- */}
      <h3 className="text-xl font-bold my-2">Seasonal</h3>
      <Crousel autoPlay>
        {data.map(i => (
          <Card
            key={i}
            {...{
              title: i?.attributes?.title?.en,
              desc: i?.attributes?.description?.en,
              genere: i.attributes.tags.filter(tag => tag.attributes.group === 'genre').map(tag => tag.attributes.name.en),
              author: i.relationships?.filter(t => t.type === 'author')?.[0]?.attributes?.name,
              imageUrl: i.relationships?.find(t=> t.type === 'cover_art')?.attributes?.fileName,
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
