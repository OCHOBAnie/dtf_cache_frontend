<script context="module" lang="ts">
	export const prerender = true;

    import type { Load } from '@sveltejs/kit';

    // see https://kit.svelte.dev/docs#loading
    export const load: Load = async ({ page, fetch }) => {
        const res = await fetch(`/api/${page.params.post_id}`);

        if (res.ok) {
            const blocks = await res.json();
            console.log(blocks);
            return {
                props: { blocks }
            };
        }

        const { message } = await res.json();

        return {
            status: res.status,
            error: new Error(message)
        };
    };
</script>

<script lang="ts">
    import type { Block } from '$lib/blocks/Types';
    import Controller from '$lib/blocks/Controller.svelte';

	export let blocks: Block[];
</script>

<svelte:head>
	<title>Cache</title>
</svelte:head>

<section>
    <p>
        {#each blocks as block}
            <Controller {block}/>
            <br>
        {/each}
    </p>
</section>

<style>
    section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>