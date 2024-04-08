import { ANIME } from '@consumet/extensions';

const gogoanime = new ANIME.Gogoanime();

async function search(anime) {
  const result = await gogoanime.search(anime?.trim()?.toLowerCase());
  return result;
};

async function get(id) {
  const result = await gogoanime.fetchAnimeInfo(id);
  return result;
};

async function download(id) {
  const result = await gogoanime.fetchEpisodeSources(id);
  return result;
};

export { search, get, download }