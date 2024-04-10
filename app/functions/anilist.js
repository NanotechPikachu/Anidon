import { META } from '@consumet/extensions';

const anilist = new META.Anilist();

async function trending() {
  const result = await anilist.fetchTrendingAnime();
  return result?.results;
};

async function popular() {
  const result = await anilist.fetchPopularAnime();
  return result?.results;
};

export { trending, popular }