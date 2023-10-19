import Card from '@/components/Card';
import React from 'react';
import Crousel from '@/components/Crousel';

function Home() {
  return (
    <>
      {/* --------------- Most Popular ---------------------- */}
      <h3 className="text-xl font-bold mb-2">Most Popular</h3>
      <Crousel autoPlay>
        {Array.from({ length: 15 }, (_, i) => i).map(i => (
          <Card
            key={i}
            {...{
              title: 'Secrets of the Gal Wife',
              desc: `Fuyuki is a beautiful and cool gal! But there's a secret side of her that she only shows in front of her husband...? A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife! A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife! A cute love comedy with a gal wife! `,
              genere: ['Romance', 'Comedy', 'Slice of Life'],
              author: 'Kudu',
            }}
          />
        ))}
      </Crousel>

      {/* --------------- Latest Updeted ---------------------- */}
      <h3 className="text-xl font-bold mb-2">Latest Updeted</h3>
      <Crousel autoPlay>
        {Array.from({ length: 15 }, (_, i) => i).map(i => (
          <Card
            key={i}
            {...{
              title: 'Secrets of the Gal Wife',
              desc: `Fuyuki is a beautiful and cool gal! But there's a secret side of her that she only shows in front of her husband...? A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife! A cute love comedy with a gal wife!  A cute love comedy with a gal wife!  A cute love comedy with a gal wife! A cute love comedy with a gal wife! `,
              genere: ['Romance', 'Comedy', 'Slice of Life'],
              author: 'Kudu',
              time: '2023-10-19T07:29:30+00:00',
              volume: 10,
              chapter: 12,
            }}
          />
        ))}
      </Crousel>
    </>
  );
}

export default Home;
