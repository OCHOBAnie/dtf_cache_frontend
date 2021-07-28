<script context="module" lang="ts">
    import type { AudioBlock } from '$lib/blocks/Types';
    import AudioPlayer from '$lib/entry/AudioPlayer.svelte';
</script>

<script lang="ts">
    export let block: AudioBlock;
</script>

<div>
    {block.title}
    {block.audio.data.audio_info.listens_count}
    {block.audio.data.filename}
    {block.audio.data.uuid}
</div>
<AudioPlayer
	src="https://leonardo.osnova.io/audio/{block.audio.data.uuid}/{block.audio.data.filename}"
	title={block.title}
/>