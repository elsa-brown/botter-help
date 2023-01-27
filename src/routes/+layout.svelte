<script>
	import '../styles/base.scss';
	import '@fontsource/inter';
	import '@fontsource/material-icons';
	import { isSafari, viewHeight } from '../store.js';
</script>

<svelte:head>
	<title>botter help</title>
	<meta name="description" content="free therapy for everyone" />
</svelte:head>

<main style={$isSafari ? `height: ${$viewHeight}px` : ''}>
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
