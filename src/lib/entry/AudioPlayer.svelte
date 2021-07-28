<script context="module" lang="ts">
	const elements = new Set<HTMLAudioElement>();

	export function stopAll() {
		elements.forEach(element => {
			element.pause();
		});
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let title: string;

	let audio: HTMLAudioElement;
	let paused = true;

	onMount(() => {
		elements.add(audio);
		return () => elements.delete(audio);
	});

	function stopOthers() {
		elements.forEach(element => {
			if (element !== audio) { 
                element.pause();
                element.currentTime = 0;
            }
		});
	}
</script>

<article class:playing={!paused}>
	<p><strong>{title}</strong></p>

	<audio
		bind:this={audio}
		bind:paused
		on:play={stopOthers}
		controls
		{src}
	></audio>
</article>

<style>
	article {
		margin: 0 0 1em 0; max-width: 800px;
	}
	p {
		margin: 0 0 0.3em 0;
	}
	audio {
		width: 100%; margin: 0.5em 0 1em 0;
	}
	.playing {
		color: #ff3e00;
	}
</style>