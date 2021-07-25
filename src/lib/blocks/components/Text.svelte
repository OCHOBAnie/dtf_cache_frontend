<script context="module" lang="ts">
    import type { TextBlock } from '$lib/blocks/Types';

    import { FromMD } from '$lib/helpers/parsers';
</script>

<script lang="ts">
    export let block: TextBlock;
</script>

<p class="font-bold bg-gray-600">
    {@html FromMD(block.text)}
</p>