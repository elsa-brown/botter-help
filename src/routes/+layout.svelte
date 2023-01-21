<script>
	import '../style/base.scss';
	import '@fontsource/inter';
</script>

<svelte:head>
	<title>botter help</title>
	<meta name="description" content="free therapy for everyone" />
</svelte:head>

<div class="app">
	<slot />
</div>

<style lang="scss">
	.app {
		font-family: 'Inter', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
</style>
