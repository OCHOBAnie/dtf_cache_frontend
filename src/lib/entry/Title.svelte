<script lang="ts">
    import type { EntryData } from '$lib/blocks/Types';
    export let entryData: EntryData;
</script>

<h1 class="headline">
    {entryData.title}
    {#if entryData.isEditorial}
        <span class="editorial-check-mark">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 18 18" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </span>
    {/if}
</h1>

<style>
    .editorial-check-mark {
        color: #e55c78;
        display: inline-block;
    }

    .headline {
        font-size: 36px;
        font-weight: 500;
        line-height: 1.3em;
        word-wrap: break-word;
        margin-top: 14px;
        margin-bottom: 15px;
        text-align: start;
        color: black;
    }
</style>