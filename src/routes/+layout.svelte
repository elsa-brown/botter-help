<script>
	import '../style/base.scss';
	import '@fontsource/inter';
	import '@fontsource/material-icons';
</script>

<svelte:head>
	<title>botter help</title>
	<meta name="description" content="free therapy for everyone" />
</svelte:head>

<main>
	<slot />
</main>

<style lang="scss">
	main {
		font-family: 'Inter', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
</style>
