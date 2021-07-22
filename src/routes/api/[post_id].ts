import type { EndpointOutput, Request } from '@sveltejs/kit';


export async function get({ params }: Request): Promise<EndpointOutput> {
    const { post_id } = params;
    const res = await fetch(`https://api.dtf.ru/v1.9/entry/${post_id}`);
    const resJson = await res.json();
    return { body: resJson.result.blocks};
}