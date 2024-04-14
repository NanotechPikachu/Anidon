import { META } from '@consumet/extensions';
import fs from 'node:fs';
import path from 'node:path';
const url = 'https://graphql.anilist.co';

const anilist = new META.Anilist();

async function trending() {
  const p = path.resolve(process.cwd(), './app/functions/trendingAnime.graphql');
  const query = fs.readFileSync(p, 'utf-8');
  const d = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query
    })
  }).then(res => res.json()).catch(err => console.error(err));
  return d.data.Page.media;
};

async function popular() {
  const result = await anilist.fetchPopularAnime();
  return result?.results;
};

export { trending, popular }
