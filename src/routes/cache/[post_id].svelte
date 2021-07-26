<script context="module" lang="ts">
	export const prerender = true;

    import type { Load } from '@sveltejs/kit';

    // see https://kit.svelte.dev/docs#loading
    export const load: Load = async ({ page, fetch }) => {
        const res = await fetch(`/api/${page.params.post_id}`);

        if (res.ok) {
            const entry = await res.json();
            const { entryBlocks, entryData } = entry;
            return {
                props: { entryBlocks, entryData }
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
    import type { Block, EntryData } from '$lib/blocks/Types';
    import Controller from '$lib/blocks/Controller.svelte';
    import Header from '$lib/entry/Header.svelte';

	export let entryBlocks: Block[];
	export let entryData: EntryData;
</script>

<svelte:head>
	<title>Cache</title>
</svelte:head>

<main id="page_wrapper">
    <div class="l-entry l-island-round py-[30px] bg-white">
        <Header {entryData}/>
        <div class="content content--full ">
            {#each entryBlocks as block}
                <figure>
                    <Controller {block}/>
                </figure>
            {/each}
        </div>
    </div>
</main>

<style>
    .l-entry {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (min-width: 640px) {
        .l-island-round {
            border-radius: 8px;
        }
    }

    main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

    .content figure:not(:first-child) {
        margin-top: 30px;
    }

    .content figure {
        margin-bottom: 30px;
    }
</style>