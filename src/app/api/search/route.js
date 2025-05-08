import { NextResponse } from "next/server";
import { animepaheUrl, headers } from "../config";

export async function GET(request) {
  const url = new URL(request.url);
  const anime = url?.searchParams?.get("anime");
  const data = await fetch(
    `${animepaheUrl}/api?m=search&q=${encodeURIComponent(anime)}`,
    {
      headers: headers,
    },
  );
  let dataSheet;
  if (data?.status === 200) {
    dataSheet = await data.json();
  } else if (data.status === 404) {
    return NextResponse.json({ message: "Anime Not Found" }, { status: 404 });
  } else {
    return NextResponse.json({ message: "Unhandled Error" }, { status: 500 });
  }
  if (dataSheet?.total === 0)
    return NextResponse.json({ message: "Anime Not Found" }, { status: 404 });
  //console.log(dataSheet);
  return NextResponse.json({ dataSheet }, { status: 200 });
}
