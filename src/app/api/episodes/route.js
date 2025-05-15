import { animepaheUrl, headers } from "../config";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const animeId = url?.searchParams?.get("animeId");
  const pageNo = url?.searchParams?.get("page") || 1;

  const episodeData = await fetch(
    `${animepaheUrl}/api?m=release&id=${animeId}&sort=episode_asc&page=${pageNo}`,
    {
      headers: headers,
    },
  ).then((res) => res.json());

  if (!episodeData?.total) return NextResponse.json( { error: 'No episodes found!' }, { status:404 });

  return NextResponse.json(
    { episodeData },
    { status: 200 },
  );
}