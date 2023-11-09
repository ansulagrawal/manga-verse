import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get('limit') || 15;

  return await axios
    .get(
      `${process.env.MANGA_URL}/manga?limit=${limit}&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[createdAt]=desc&includes[]=cover_art&hasAvailableChapters=true`
    )
    .then(res => {
      return NextResponse.json({ data: res?.data?.data || [] }, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ data: [] }, { status: 200 });
    });
}
