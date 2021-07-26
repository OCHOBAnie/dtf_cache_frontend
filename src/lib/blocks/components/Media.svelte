<script context="module" lang="ts">
    import type { MediaBlock } from '$lib/blocks/Types';
    import { FromMD } from '$lib/helpers/parsers';
</script>

<script lang="ts">
    export let block: MediaBlock;
</script>

<div class="{block.with_background ? 'l-island-b' : 'l-island-c'}">
    {#each block.items as item}
        <figure>
            <div class="media-single {block.with_background ? 'with_background' : ''}"> 
                {#if item.image.data.type === "gif"}
                    <video muted controls class="media-single__vid">
                        <source src="https://leonardo.osnova.io/{item.image.data.uuid}/-/format/mp4/" type="video/mp4">
                    </video>
                {:else}
                    <div class="media-single__image" style="max-width: {item.image.data.width}px;">
                        <img src="https://leonardo.osnova.io/{item.image.data.uuid}/-/preview/1100/-/format/webp/" alt="{item.title}">
                    </div>
                {/if}
            </div>
            {#if item.title || item.author}
                <figcaption class="content-media-caption l-island-a">
                    {#if item.title}
                        <span class="content-media-caption__title">{@html FromMD(item.title)}</span>
                    {/if}
                    {#if item.author}
                        <span class="content-media-caption__author">{@html FromMD(item.author)}</span>
                    {/if}
                </figcaption>
            {/if}
        </figure>
    {/each}
</div>

<style>
    figcaption {
        margin-top: 15px;
        font-size: 15px;
        line-height: 1.45em;
    }

    .content-media-caption__title {
        margin-right: 15px;
    }

    .content-media-caption__author {
        font-size: 13px;
        color: #595959;
    }

    .with_background {
        background-color: #f5fcff;
        padding: 30px;
    }

    .with_background > div {
        margin: 0 auto;
    }

    .media-single__image > img {
        display: block;
        width: 100%;
        cursor: zoom-in;
    }
</style>