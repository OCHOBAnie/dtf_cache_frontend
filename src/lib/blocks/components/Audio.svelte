<script context="module" lang="ts">
    import type { AudioBlock } from '$lib/blocks/Types';
</script>

<script lang="ts">
    export let block: AudioBlock;
</script>

<div>
    {block.hash}
    {block.title}
    {block.audio.data.audio_info.bitrate}
    {block.audio.data.audio_info.channel}
    {block.audio.data.audio_info.duration}
    {block.audio.data.audio_info.format}
    {block.audio.data.audio_info.framesCount}
    {block.audio.data.audio_info.listens_count}
    {block.audio.data.filename}
    {block.audio.data.size}
    {block.audio.data.uuid}
</div>