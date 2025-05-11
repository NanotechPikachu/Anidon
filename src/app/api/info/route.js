import * as cheerio from "cheerio";
import { animepaheUrl, headers } from "../config";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const animeId = url?.searchParams?.get("animeId");
  const pageNo = url?.searchParams?.get("page") || 1;
  const page = await fetch(`${animepaheUrl}/anime/${animeId}`, {
    headers: headers,
  }).then((res) => res.text());

  const $ = cheerio.load(page);
  const title = $("h1 > span").text();

  if (!title)
    return NextResponse.json({ error: "Anime not found" }, { status: 404 });

  const synopsis = $(".anime-synopsis")?.text() || "N/A";
  const cover = $("div.anime-poster > a").attr("href");
  let info = {};
  info.genres = $("div.anime-genre ul li")
    .map((i, el) => $(el).find("a").attr("title"))
    .get();
  info.status = $('div.anime-info p:icontains("Status:") a').text().trim();
  info.type = $('div.anime-info > p:icontains("Type:") a').text().trim();
  info.releaseDate = $('div.anime-info > p:icontains("Aired:")')
    .text()
    .split("to")[0]
    .replace("Aired:", "")
    .trim();
  info.studio = $('div.anime-info > p:icontains("Studio:")')
    .text()
    .replace("Studio:", "")
    .trim()
    .split("\n");
  info.episodes = $('div.anime-info > p:icontains("Episodes:")')
    .text()
    .replace("Episodes:", "")
    .trim();

  const episodeData = await fetch(
    `${animepaheUrl}/api?m=release&id=${animeId}&sort=episode_asc&page=${pageNo}`,
    {
      headers: headers,
    },
  ).then((res) => res.json());

  return NextResponse.json(
    { title, cover, synopsis, info, episodeData },
    { status: 200 },
  );
}
