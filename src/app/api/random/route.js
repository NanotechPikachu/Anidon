import * as cheerio from "cheerio";
import { animepaheUrl, headers } from "../config";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url)?.origin;

  const res = await fetch(`${animepaheUrl}/anime`, { headers: headers }).then(
    (res) => res.text(),
  );

  const results = [];

  const $ = cheerio.load(res);

  $(".tab-pane").each((i, p) => {
    $(p)
      .find(".col-12.col-md-6 > a")
      .each((j, el) => {
        const href = $(el).attr("href");
        const text = $(el).text().trim();
        const id = href.split("/")[2];
        results.push({
          title: text,
          session: id,
        });
      });
  });

  const randomAnimeID = [];

  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * results?.length);
    randomAnimeID.push(results[randomIndex]?.session);
  }

  const randomAnimeData = [];

  for (const id of randomAnimeID) {
    const res = await fetch(`${url}/api/info?animeId=${id}`);

    if (res?.ok) {
      const data = await res.json();
      randomAnimeData.push({ id: id, title: data.title, cover: data.cover });
    }
  }

  return NextResponse.json({ randomAnimeData }, { status: 200 });
}
