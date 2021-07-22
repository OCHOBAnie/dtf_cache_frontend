<script context="module" lang="ts">
    import type { HeaderBlock } from '$lib/blocks/Types';
</script>

<script lang="ts">
    export let block: HeaderBlock;

    const render = () => `<${block.style} class="${block.style}">${block.text}</${block.style}>`
</script>

{@html render()}