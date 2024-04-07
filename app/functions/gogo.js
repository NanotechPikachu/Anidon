import { ANIME } from '@consumet/extensions';

async function search(anime) {
  const gogoanime = new ANIME.Gogoanime();
  const result = await gogoanime.search(anime?.trim()?.toLowerCase());
  return result
};

export { search }