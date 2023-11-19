import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  return await axios
    .get(
      `${process.env.MANGA_URL}/manga/${id}/feed?limit=96&includes[]=scanlation_group&includes[]=user&order[volume]=desc&order[chapter]=desc&offset=0&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&contentRating[]=pornographic`
    )
    .then(res => {
      return NextResponse.json({ data: res?.data?.data || [] }, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ data: [] }, { status: 200 });
    });
}
