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
  const res = await gogoanime.fetchEpisodeSources(id);
  const d = res?.download;
  let result;
  if (d) {
    result = await gogoanime.fetchDirectDownloadLink(d);
  } else {
    result = false;
  };
  return result;
};

async function stream(id) {
  const result = await gogoanime.fetchEpisodeSources(id);
  return result;
};

export { search, get, download, stream }