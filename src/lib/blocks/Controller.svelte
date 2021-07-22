<script context="module" lang="ts">
    import type { Block } from './Types';
    import * as Components from './components/index.js'

    const options = {
		'text': Components.Text,
        'header': Components.Header,
        'delimiter': Components.Delimiter,
        'link': Components.Link,
        'media': Components.Media,
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