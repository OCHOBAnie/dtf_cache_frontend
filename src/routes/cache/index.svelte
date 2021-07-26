<!-- <script context="module" lang="ts">
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
</script> -->

<!-- <script lang="ts">
    import type { TextBlock } from '$lib/blocks/Text.svelte';
    import type { HeaderBlock } from '$lib/blocks/Header.svelte';
    import Text from '$lib/blocks/Text.svelte';
    import Header from '$lib/blocks/Header.svelte';

    type Block = {
		type: string;
		data: TextBlock | HeaderBlock;
		cover: boolean;
		hidden: boolean;
        anchor: string;
	};

    const options = {
		'text': Text,
        'header': Header
	};

	export let blocks: Block[];
</script> -->

<svelte:head>
	<title>Cache Main Page</title>
</svelte:head>

<section>
    <p>
        Cache Main Page
        <!-- {#each blocks as block}
            {#if block.type in options}
                <svelte:component this={options[block.type]} block={block.data}/>
            {:else}
                {block.type}
            {/if}
            <br>
        {/each} -->
    </p>
    <form id="form" method="get">
        <input type="number" name="post_id" placeholder="Id поста" onchange="document.getElementById('form').action = '/cache/' + this.value;">
        <input type="submit" value="Go">
     </form>
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