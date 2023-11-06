import getData from '@/helpers/api';
import Image from 'next/image';
import React from 'react';

async function Manga({ params }) {
  const detail = await getData('api/manga-detail', { id: params?.id });
  const imageUrl = detail.relationships?.find(t => t.type === 'cover_art')?.attributes?.fileName;
  return (
    <div>
      <div className="aspect-[7/8] object-cover relative h-[400px]">
        <Image
          className="pointer-events-none select-none object-cover shadow-[0px_0px_10px_10px_gray]"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/covers/${params?.id}/${imageUrl}`}
          alt="Cover Image"
          fill
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Manga;
