<script context="module" lang="ts">
	import type { Block } from './Types';
	import * as Components from './components/index.js';

	const options = Object.fromEntries(
		Object.keys(Components).map(x => [x.toLowerCase(), Components[x]])
	);
</script>

<script lang="ts">
	export let block: Block;
</script>

{#if block.type in options}
	<svelte:component this={options[block.type]} block={block.data} />
{:else}
	<span class="bg-red-600">{block.type}</span>
{/if}
