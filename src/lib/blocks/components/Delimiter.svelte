<script context="module" lang="ts">
    import type { DelimiterBlock } from '$lib/blocks/Types';
</script>

<script lang="ts">
    export let block: DelimiterBlock;
</script>

<div class="l-island-a">
    {#if block.type === 'default'}
        <div class="{block.type}-delimiter block h-[0.6em] text-5xl text-center tracking-widest">
            ***
        </div>
    {:else}
        <div class="{block.type}">
            *** - {block.type}
        </div>
    {/if}
</div>
