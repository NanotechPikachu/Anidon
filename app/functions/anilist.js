import fs from 'node:fs';
import path from 'node:path';
const url = 'https://graphql.anilist.co';

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
  return d?.data?.Page?.media;
};

async function popular() {
  const p = path.resolve(process.cwd(), './app/functions/popularAnime.graphql');
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
  return d?.data?.Page?.media;
};

async function latestRelease() {
  const p = path.resolve(process.cwd(), './app/functions/latestEpisodes.graphql');
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
  console.log(JSON.stringify(d));
  return d?.data?.Page?.airingSchedules;
};

export { trending, popular, latestRelease }
