<script context="module" lang="ts">
    import type { LinkBlock } from '$lib/blocks/Types';
</script>

<script lang="ts">
    export let block: LinkBlock;

    let usefullData = block.link.data;
    let imageData = usefullData.image.data;
</script>

<a class="andropov_link andropov_link--with_image" href={usefullData.url} target="_blank" rel="noopener noreferrer">
    <img class="andropov_image" src={imageData.uuid} alt={usefullData.description}>
    
    <div class="andropov_link__title font-bold">
        {usefullData.title}
    </div>

    <div class="andropov_link__description">
        {usefullData.description || usefullData.title}
    </div>

    <div class="andropov_link__host">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-[14px] w-[14px] icon icon--ui_external inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        {(new URL(usefullData.url)).hostname}
    </div>
</a>

<style>
    .andropov_link--with_image {
        min-height: 68px;
    }

    .andropov_link {
        display: block;
        padding: 11px 16px;
        border: 1px solid #dedede!important;
        border-radius: 4px;
        color: #000!important;
        max-width: 600px;
    }

    .andropov_link .andropov_image {
        float: right;
        width: 64px;
        max-height: 64px;
        margin-left: 30px;
        margin-top: 9px;
        border-radius: 2px;
        background-color: transparent!important;
    }

    .andropov_image {
        overflow: hidden;
    }

    img[src] {
        visibility: visible;
    }

    img {
        visibility: hidden;
    }

    .andropov_link__description, .andropov_link__host, .andropov_link__title {
        padding-right: 94px;
        word-wrap: break-word;
    }

    .andropov_link__title {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 2px;
        font-weight: 500;
    }

    .andropov_link__description {
        font-size: 15px;
        line-height: 22px;
        margin-bottom: 7px;
    }

    .andropov_link__host {
        font-size: 12px;
        line-height: 17px;
        color: #595959;
        text-transform: uppercase;
        display: flex;
    }

    .andropov_link__host .icon {
        position: static;
        margin-right: 5px;
    }

    .icon {
        position: relative;
        pointer-events: none;
    }

    a {
        text-decoration: none;
    }
</style>