<script>
	import '@fontsource/inter';
	import '../styles.css';
</script>

<svelte:head>
	<title>botter help</title>
	<meta name="description" content="free therapy for everyone" />
</svelte:head>

<div class="app">
	<slot />
</div>

<style lang="sass">
	.app {
		font-family: 'Inter', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
</style>
