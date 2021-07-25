<script context="module" lang="ts">
    import type { MediaBlock } from '$lib/blocks/Types';
    import { FromMD } from '$lib/helpers/parsers';
</script>

<script lang="ts">
    export let block: MediaBlock;
</script>

<div>
    {block.with_background}
    {block.with_border}
    {#each block.items as item}
        {item.image.data.uuid}
    {/each}
    <figure>
    {#if block.items.length === 1}
        <div class="content-image content-image--wide"> 
            <div class="andropov_image andropov_image--zoomable" style="max-height: {block.items[0].image.data.height}px;max-width: {block.items[0].image.data.width}px;">
                <div class="andropov_image__inner" style="padding-bottom: 0px; background: transparent;">
                    <img src="https://leonardo.osnova.io/{block.items[0].image.data.uuid}/-/preview/800/-/format/webp/" alt="{block.items[0].title}">
                </div>
            </div>
        </div>
        <figcaption class="content-image-caption l-island-a">
            <span class="content-image-caption__title">{@html FromMD(block.items[0].title)}</span>
            <span class="content-image-caption__author">{@html FromMD(block.items[0].author)}</span>
        </figcaption>
        
    {:else}
    <div>many</div>
    {/if}
    </figure>
</div>

<style>
    figcaption {
        margin-top: 15px;
        font-size: 15px;
        line-height: 1.45em;
    }

    .content-image-caption__title {
        margin-right: 15px;
    }

    .content-image-caption__author {
        font-size: 13px;
        color: #595959;
    }
</style>