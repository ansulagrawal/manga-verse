import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  return await axios
    .get(
      `${process.env.MANGA_URL}/manga?limit=15&includes[]=cover_art&includes[]=author&order[latestUploadedChapter]=desc&hasAvailableChapters=true`
    )
    .then(res => {
      return NextResponse.json({ data: res?.data?.data || [] }, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ data: [] }, { status: 200 });
    });
}
