import * as cheerio from 'cheerio';
import { animepaheUrl, headers, kwikAuth, kwikExtract } from '../config';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const url = new URL(request.url);
    const animeId = url?.searchParams?.get('animeId');
    const episodeId = url?.searchParams?.get('episodeId');

    const page = await fetch(`${animepaheUrl}/play/${animeId}/${episodeId}`, {
        headers: headers
    }).then(res => res.text());

    const $ = cheerio.load(page);

    const downloads = $('div#pickDownload > a').map((i, el) => ({
        url: $(el).attr('href'),
        quality: $(el).text(),
    })).get();

    const downloadLinks = [];

    for (const d of downloads) {
        const url = await fetch(d?.url, {
            headers: {
                Referer: animepaheUrl,
            }
        }).then(res => res.text());

        const $$ = cheerio.load(url);
        const a = $$('script').html();
        const linky = a.split('.attr')[2].split('.html')[0].split(',')[1].replaceAll('"', '').replace(')', ''); 
        downloadLinks.push({
            url: linky,
            quality: d?.quality,
        });
    };

    const dlLinks = [];

    for (const d of downloadLinks) {
        const kwik = d?.url;
        const res = await fetch(kwikExtract, {
            method: 'POST',
            body: JSON.stringify({
                service: 'kwik',
                action: 'fetch',
                auth: kwikAuth,
                content: { kwik }
            })
        }).then(res => res.json());
        dlLinks.push({
            url: res?.content?.url,
            quality: d?.quality,
        });
    };

    return NextResponse.json({ downloadLinks, dlLinks }, { status: 200 });
}