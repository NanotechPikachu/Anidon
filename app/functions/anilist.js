import { META } from '@consumet/extensions';
const { requireText } = './require-text.js';
const url = 'https://graphql.anilist.co';

const anilist = new META.Anilist();

async function trending() {
  const query = requireText('./trendingAnime.graphql', require);
  const d = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query
    })
  }).then(res => res.json).catch(err => console.error(err));
  console.log(JSON.stringify(d));
  return d.data.Page.media;
};

async function popular() {
  const result = await anilist.fetchPopularAnime();
  return result?.results;
};

export { trending, popular }
