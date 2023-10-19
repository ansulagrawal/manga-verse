import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { NextResponse } from 'next/server';

dayjs.extend(utc);

export async function GET() {
  // Date Format: 2023-09-19T10:24:23
  const date = dayjs().subtract(1, 'M').utc().format('YYYY-MM-DDTHH:mm:ss');

  return await axios
    .get(`${process.env.MANGA_URL}/manga?hasAvailableChapters=true&createdAtSince=${date}&limit=20&order[followedCount]=desc&contentRating[]=safe&contentRating[]=suggestive&includes[]=cover_art&includes[]=author`)
    .then(res => {
      return NextResponse.json({ data: res?.data?.data || [] }, { status: 200 });
    })
    .catch(() => {
      return NextResponse.json({ data: [] }, { status: 200 });
    });
}

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }

// export async function POST(request) {
//   const { title, description } = await request.json();
//   await connectMongoDB();
//   await Topic.create({ title, description });
//   return NextResponse.json({ message: "Topic Created" }, { status: 201 });
// }