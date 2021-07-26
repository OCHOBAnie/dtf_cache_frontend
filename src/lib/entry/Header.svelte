<script lang="ts">
    import type { EntryData } from '$lib/blocks/Types';
    export let entryData: EntryData;

    const localeDate = new Date(entryData.date * 1000).toLocaleString("ru");
</script>

<nav class="post_info">
    <div class="header__info">
        {#each entryData.authors as author}
            <a class="header__item" href="{author.url}" target="_blank">
                <img class="author__avatar" src="{author.avatar_url}-/scale_crop/22x22/" alt="user pic">
                <span class="author__name">{author.name}</span>
            </a>
        {/each}
        <div class="header-number">
            <a href="{entryData.url}" target="_blank">
                <time class="time" title="{localeDate}">{localeDate}</time>
            </a>
        </div>
    </div> 
</nav>

<style>
    .post_info {
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 1.5em;
        margin-bottom: 14px;
        width: 680px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 860px) {
        .author__avatar+.author__name {
            margin-left: 32px;
        }
        .author__avatar {
            margin-right: 10px;
        }
    }

    .author__avatar+.author__name {
        margin-left: 30px;
    }

    .author__name {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }

    .author__avatar {
        width: 22px;
        height: 22px;
        border-radius: 6px;
        margin-right: 8px;
        flex-shrink: 0;
        overflow: hidden;
        box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
        image-rendering: -webkit-optimize-contrast;
        position: absolute;
    }

    .header__item {
        display: flex;
        align-items: center;
        white-space: nowrap;
        min-width: 0;
        font-weight: 500;
        cursor: pointer;
        margin-right: 20px;
        flex-shrink: 0;
    }

    .header-number {
        flex-shrink: 1;
        min-width: 0;
        display: flex;
        align-items: center;
        color: #595959;
        font-size: 15px;
        white-space: nowrap;
        min-width: 0;
    }

    time {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #595959;
    }

    .header__info {
        margin-bottom: 0;
        min-width: 0;
        display: flex;
        align-items: baseline;
    }
</style>