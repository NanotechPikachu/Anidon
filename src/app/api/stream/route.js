import * as cheerio from 'cheerio';
import { animepaheUrl, headers } from '../config';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const url = new URL(request.url);
    const animeId = url?.searchParams?.get('animeId');
    const episodeId = url?.searchParams?.get('episodeId');

    const page = await fetch(`${animepaheUrl}/play/${animeId}/${episodeId}`, {
        headers: headers
    }).then(res => res.text());

    const $ = cheerio.load(page);

    const links = $('div#resolutionMenu > button').map((i, el) => ({
        url: $(el).attr('data-src'),
        quality: $(el).text(),
        audio: $(el).attr('data-audio'),
    }));

    const downloads = $('div#pickDownload > a').map((i, el) => ({
        url: $(el).attr('href'),
         quality: $(el).text(),
    })).get(); console.log(downloads);

    const sources = [];

    for (const link of links) {
        const data = await fetch(link.url, {
            headers: {
                Referer: animepaheUrl,
            }
        }).then(res => res.text());
        const match = /(eval)(\(f.*?)(\n<\/script>)/s.exec(data);
        const source = match ? eval(match[2].replace('eval', '')).match(/https.*?m3u8/) : null;
        sources.push({
            link: source[0],
            quality: link?.quality,
            audio: link?.audio,
        });
    };

    if (sources?.length === 0) return NextResponse.json({ error: 'No sources found' }, { status: 404 });

    return NextResponse.json({ sources }, { status: 200 });
}