import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { NextResponse } from 'next/server';

dayjs.extend(utc);

export async function GET() {
  // Date Format: 2023-09-19T10:24:23
  const date = dayjs().subtract(1, 'M').utc().format('YYYY-MM-DDTHH:mm:ss');

  return await axios
    .get(
      `${process.env.MANGA_URL}/manga?limit=15&contentRating[]=safe&updatedAtSince=${date}&contentRating[]=suggestive&contentRating[]=erotica&includes[]=cover_art&includes[]=author&order[latestUploadedChapter]=desc&hasAvailableChapters=true`
    )
    .then(res => {
      return NextResponse.json({ data: res?.data?.data || [] }, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ data: [] }, { status: 200 });
    });
}
