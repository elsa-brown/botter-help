<script>
	import '../styles/base.scss';
	import '@fontsource/inter';
	import '@fontsource/material-icons';
	import { onMount } from 'svelte';
	import { isMobile } from 'svelte-browser';
	import { isSafari } from '../store.js';
	import { browser } from '$app/environment';

	let viewHeight = 0;

	const handleKeyboardView = () => {
		if (browser) {
			viewHeight = window.visualViewport.height;

			window.visualViewport.onresize = () => {
				viewHeight = window.visualViewport.height;

				/* Handles mysterious scroll after resize */
				window.visualViewport.onscroll = () => {
					window.scroll(0, 0);
				};
			};
		}
	};

	onMount(async () => {
		if (isMobile || $isSafari) {
			handleKeyboardView();
		}
	});
</script>

<svelte:head>
	<title>botter help</title>
	<meta name="description" content="free therapy for everyone" />
</svelte:head>

<main style={isMobile || $isSafari ? `height: ${viewHeight}px` : ''}>
	<slot />
</main>

<style lang="scss">
	main {
		font-family: 'Inter', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
		width: 100vw;
		max-width: 414px;
		margin: 0 auto;
		padding: 0 4px;
	}
</style>
