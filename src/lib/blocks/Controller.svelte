<script context="module" lang="ts">
    import type { Block } from './Types';
    import Text from './Text.svelte';
    import Header from './Header.svelte';
    import Delimiter from './Delimiter.svelte';

    const options = {
		'text': Text,
        'header': Header,
        'delimiter': Delimiter
	};
</script>

<script lang="ts">
    export let block: Block;
</script>

{#if block.type in options}
    <svelte:component this={options[block.type]} block={block.data}/>
{:else}
    <span class="bg-red-600">{block.type}</span>
{/if}