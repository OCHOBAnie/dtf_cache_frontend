import type { EndpointOutput, Request } from '@sveltejs/kit';


export async function get({ params }: Request): Promise<EndpointOutput> {
    const { post_id } = params;
    const res = await fetch(`https://api.vc.ru/v1.9/entry/${post_id}`);
    let entry = await res.json();
    if (!entry.error) {
        entry = entry.result;
        const authors = [{
            type: 'user',
            url: entry.author.url,
            name: entry.author.name,
            avatar_url: entry.author.avatar_url
        }];
        if (entry.author.url !== entry.subsite.url) {
            authors.push({
                type: 'subsite',
                url: entry.subsite.url,
                name: entry.subsite.name,
                avatar_url: entry.subsite.avatar_url
            })
        }
        const entryData = {
            url: entry.url,
            authors: authors,
            date: entry.date
        }
        return { body: { entryData, entryBlocks: entry.blocks } };
    } else {
        return { status: 404, body: { message: entry.message}}
    }
}