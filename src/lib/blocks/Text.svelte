<script context="module" lang="ts">
    import type { TextBlock } from '$lib/blocks/Types';

    import snarkdown from 'snarkdown';
</script>

<script lang="ts">
    export let block: TextBlock;
</script>

<p class="font-bold bg-gray-600">
    {@html snarkdown(block.text)
        .replace(/\\_/g, '_')
        .replace('<a href', '<a target="_blank" href')
    }
</p>