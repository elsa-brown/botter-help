<script>
	import '@fontsource/inter';
	import '../styles.css';
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		font-family: 'Inter';
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
</style>
