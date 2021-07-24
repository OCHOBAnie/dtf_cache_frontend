<script context="module" lang="ts">
    import type { VideoBlock } from '$lib/blocks/Types';
</script>

<script lang="ts">
    export let block: VideoBlock;

    let clicked = false;

    const {name, id} = block.video.data.external_service;

    const src = `https://${name}.com/embed/${id}${name == 'coub' ? '?muted=false&autostart=true&originalSize=false&hideTopBar=true&startWithHD=true' : ''}`;
</script>

<div class="video {name}" style="width: 800px; height: 450px;" on:click|once={() => clicked = true}>
    {#if !clicked}
        <div class="video__thumbnail" style="background-image: url('https://leonardo.osnova.io/{block.video.data.thumbnail.data.uuid}/-/preview/800/-/format/webp/');">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-[80px] w-[80px] icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
        </div>
    {:else}
        <iframe {src} width="800px" height="450px" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture" frameborder="0" title="Embeded video"></iframe>
    {/if}
</div>

<style>
    .video.youtube:hover .video__thumbnail .icon {
        fill: red;
    }

    .video.coub:hover .video__thumbnail .icon {
        fill: blue;
    }

    .icon {
        margin-left: -40px;
        margin-top: -40px;
        fill: whitesmoke;
        transition: fill 200ms cubic-bezier(0,0,.2,1);
        display: block;
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 50%;
    }

    .video {
        display: block;
        position: relative;
        max-width: 100%;
        margin: 24px auto 16px;
        padding: 0;
        box-sizing: border-box;
        cursor: pointer;
    }

    .video__thumbnail {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>